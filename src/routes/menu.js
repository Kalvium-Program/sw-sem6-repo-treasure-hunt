const fs = require("fs");
const path = require("path");
const { formatPrice } = require("../utils/format");

function menuRoute(req, res) {
  const raw = fs.readFileSync(path.join(__dirname, "../../data/menu.json"), "utf8");
  const items = JSON.parse(raw).map((i) => ({ ...i, price: formatPrice(i.price) }));
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(items));
}
module.exports = { menuRoute };
