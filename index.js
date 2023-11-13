import express from "express";
import cors from "cors";
import request from "request";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());

app.use("/hello", (req, res) => {
    res.send("Hello World!");
})

// app.get("/:goods_id", (req, res) => {
//     const { goods_id } = req.params;
//     const url = `https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id=${goods_id}`;
//     req.pipe(request(url)).pipe(res);
// });

app.listen(8459, () => {
    console.log(`Port 8459`);
});

module.exports = app;