import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const catalogPath = path.join(process.cwd(), 'src', 'data', 'catalog.json')
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'))
    
    const categories = [...new Set(catalog.map((item: any) => item.category))];
    const colors = [...new Set(catalog.map((item: any) => item.color))];
    const sizes = [...new Set(catalog.flatMap((item: any) => item.sizes.map(String)))];
    
    res.status(200).json({
      categories,
      colors,
      sizes
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to load filter options' })
  }
}