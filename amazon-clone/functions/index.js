const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IxtXbSAJAMiW0SgoUgaxOCc20lynQNwqTOz21WeVW4b9pNLWP2vUFQttqTAepLuJpQ8QIBDRMQgM1DnApGgoARZ00xc86YlGv"
);

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
console.log("HEREEEE");
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment req recd", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  //   console.log("sectet", c)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);
