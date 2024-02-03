import express from "express";
import request from "request";
import { getinventory } from "get-steam-inventory";

var steamid = "76561199039295287";
let t = "";

const bulkList = (steamid) => {
    getinventory(730, steamid, 2)
        .then((data) => {
            t = data.marketnames;
        })
        .catch((err) => {
            t = "(" + err + " user - " + steamid + ")";
        });
    return t;
};

const app = express();

app.get("", (req, res) => res.send(bulkList(steamid)));

app.get("/:goods_id", (req, res) => res.send(bulkList(req.params.goods_id)));

app.listen(8460, () => console.log("Server running on port 8460"));

export default app;
