export default function handler(req, res) {
  // Only expose the PUBLIC key and cluster — never the secret
  res.status(200).json({
    key: process.env.PUSHER_KEY,
    cluster: process.env.PUSHER_CLUSTER || 'us3',
  });
}
