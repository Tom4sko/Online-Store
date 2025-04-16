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

  const catalogPath = path.join(process.cwd(), 'public', 'catalog.json')
  const eventsPath = path.join(process.cwd(), 'public', 'events.json')

  const catalog: Product[] = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'))
  const events: Event[] = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'))

  // Filtrovanie
  let filtered = catalog
  if (category) filtered = filtered.filter(p => p.category === category)
  if (color) filtered = filtered.filter(p => p.color === color)

  // Štatistiky
  const stats = filtered.map(product => {
    const views = events.filter(e => e.product_id === product.id && e.action === 'view').length
    const clicks = events.filter(e => e.product_id === product.id && e.action === 'click').length
    const ctr = views > 0 ? (clicks / views).toFixed(2) : '0.00'

    return {
      product_id: product.id,
      views,
      clicks,
      ctr
    }
  })

  res.status(200).json({
    products: filtered,
    statistics: stats
  })
}
