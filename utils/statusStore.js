const store = {};

// Save payment status and auto-reset after 30 seconds
export function setStatus(orderId, status) {
  store[orderId] = status;

  setTimeout(() => {
    if (store[orderId] === status) {
      store[orderId] = 'PENDING';
    }
  }, 30000);
}

// Get current payment status (default is PENDING)
export function getStatus(orderId) {
  return store[orderId] || 'PENDING';
}
