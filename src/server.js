const http = require("http");
const { menuRoute } = require("./routes/menu");
const { ordersRoute } = require("./routes/orders");
const { healthRoute } = require("./routes/health");

const PORT = process.env.PORT || 3000;

function handler(req, res) {
  if (req.url === "/health") return healthRoute(req, res);
  if (req.url === "/menu") return menuRoute(req, res);
  if (req.url.startsWith("/orders")) return ordersRoute(req, res);
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}

http.createServer(handler).listen(PORT, () => {
  console.log(`Campus Canteen running on http://localhost:${PORT}`);
});
