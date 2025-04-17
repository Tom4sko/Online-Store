import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const eventsPath = path.join(process.cwd(), 'src', 'data', 'events.json')
    const events = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'))
    res.status(200).json(events)
  } catch (error) {
    res.status(500).json({ error: 'Failed to load events data' })
  }
}