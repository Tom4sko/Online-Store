import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const catalogPath = path.join(process.cwd(), 'src', 'data', 'catalog.json')
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'))
    res.status(200).json(catalog)
  } catch (error) {
    res.status(500).json({ error: 'Failed to load catalog data' })
  }
}