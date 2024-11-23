// /pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, message }: FormData = req.body;

    // Validate or process the form data here
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Here you can handle actual form submission (e.g., send an email, save to a DB, etc.)
    try {
      // Simulating successful submission
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ error: 'Error sending message. Please try again later.' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
