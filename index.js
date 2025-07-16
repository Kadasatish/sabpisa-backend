import express from 'express';
import cors from 'cors';
import { getStatus, setStatus } from './utils/statusStore.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ SabPaisa backend is running!');
});

// Webhook route to receive payment updates
app.post('/webhook', (req, res) => {
  const { orderId, status } = req.body;
  if (!orderId || !status) return res.status(400).send('Missing orderId or status');

  setStatus(orderId, status); // Save the payment status in memory
  res.send('Webhook received');
});

// Polling route for frontend to get payment status
app.get('/status/:orderId', (req, res) => {
  res.json({ orderId: req.params.orderId, status: getStatus(req.params.orderId) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
