# SabPaisa Payment Backend

This backend server handles SabPaisa payment webhooks and provides payment status to a frontend via polling.

---

## ✅ Features

- Express.js server (Node.js)
- `/webhook` endpoint to receive payment updates from SabPaisa
- `/status/:orderId` endpoint for frontend polling
- In-memory storage of payment status (no database needed)
- Auto-reset of payment status after 30 seconds
- Fully deployable on Render

---

## 📦 Project Structure
