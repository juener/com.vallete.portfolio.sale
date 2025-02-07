import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(req.body.name)
    return res.status(200).end()
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
