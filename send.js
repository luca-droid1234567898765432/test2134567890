import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER || 'us3',
  useTLS: true,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    if (!body || !body.event || !body.data) {
      return res.status(400).json({ error: 'Missing event or data' });
    }

    await pusher.trigger('chudchat2', body.event, body.data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Pusher error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
