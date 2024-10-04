import express from "express";

express
const app = express();
const port = 3000;

const API_KEY=123456

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
      return res.status(403).json({ error: 'API key is missing' });
  }

  if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ error: 'Invalid API key' });
  }

  next();
};


app.get('/api/secure', checkApiKey, (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
