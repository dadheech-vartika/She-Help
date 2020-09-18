const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const recognition = require("./controller/recognition");
const blockchain = require("./controller/blockchain");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/pages/index.html"))
);

app.post("/submit", async (req, res) => {
  console.log(req.body);

  let payload = {
    u: req.body.user,
    a: req.body.amount
  };
  console.log(payload);
  await blockchain.submitTransaction(payload);
  let info = await blockchain.getTransactions();
  console.log(info[info.length - 1]);
  res.send(info[info.length - 1].r);

  // res.end("yes");
  // res.sendFile(path.join(__dirname + '/pages/index.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
