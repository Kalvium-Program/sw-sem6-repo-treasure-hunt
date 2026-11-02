const { listOrders } = require("../services/orders");
function ordersRoute(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(listOrders()));
}
module.exports = { ordersRoute };
