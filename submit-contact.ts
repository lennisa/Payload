// src/api/submit-contact.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import payload from 'payload'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const submission = await payload.create({
    collection: 'form-submissions',

      data: req.body.submissionData,
    })

    res.status(201).json(submission)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}