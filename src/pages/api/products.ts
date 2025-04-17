import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type Product = {
  id: number
  name: string
  category: string
  color: string
  price: number
}

type Event = {
  product_id: number
  user_id: number
  action: 'view' | 'click'
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const category = req.query.category as string
  const color = req.query.color as string

  const catalogPath = path.join(process.cwd(), 'src', 'data', 'catalog.json')
  const eventsPath = path.join(process.cwd(), 'src', 'data', 'events.json')

  const catalog: Product[] = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'))
  const events: Event[] = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'))

  // Filter
  let filtered = catalog
  if (category) filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase())
  if (color) filtered = filtered.filter(p => p.color.toLowerCase() === color.toLowerCase())

  // Stats
  const stats = filtered.map(product => {
    const views = events.filter(e => e.product_id === product.id && e.action === 'view').length
    const clicks = events.filter(e => e.product_id === product.id && e.action === 'click').length
    const ctr = views > 0 ? (clicks / views).toFixed(2) : '0.00'

    return {
      product_id: product.id,
      name: product.name,
      views,
      clicks,
      ctr
    }
  })

  // Average price
  const averagePrice = filtered.length > 0
    ? (filtered.reduce((sum, p) => sum + p.price, 0) / filtered.length).toFixed(2)
    : '0.00'

  // Top viewed and clicked products
  const mostViewed = stats.reduce((top, curr) => curr.views > top.views ? curr : top, { views: 0 } as any)
  const mostClicked = stats.reduce((top, curr) => curr.clicks > top.clicks ? curr : top, { clicks: 0 } as any)

  res.status(200).json({
    products: filtered,
    statistics: stats,
    average_price: averagePrice,
    most_viewed_product: mostViewed,
    most_clicked_product: mostClicked
  })
}
