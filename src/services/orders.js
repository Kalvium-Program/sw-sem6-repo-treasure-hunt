const orders = [
  { id: 101, item: "Masala Dosa", qty: 2, status: "ready" },
  { id: 102, item: "Veg Puff", qty: 1, status: "preparing" },
];
function listOrders() {
  return orders;
}
module.exports = { listOrders };
