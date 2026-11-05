// TODO move to env later
const RAZORPAY_KEY_SECRET = "rzp_live_FAKE_7Hq2Lm9Xc4Vb";

function createPayment(amount) {
  return { amount, key: RAZORPAY_KEY_SECRET.slice(0, 8) + "...", status: "created" };
}
module.exports = { createPayment };
