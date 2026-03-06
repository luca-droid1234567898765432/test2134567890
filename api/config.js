module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    key: process.env.PUSHER_KEY,
    cluster: process.env.PUSHER_CLUSTER || 'us3',
  });
};
