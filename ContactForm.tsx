'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionData: {
            fullname: formData.fullname,
            email: formData.email,
            message: formData.message,
          },
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ fullname: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4">
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={formData.fullname}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit'}
      </button>
      {status === 'success' && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Something went wrong. Try again.</p>
      )}
    </form>
  )
}
