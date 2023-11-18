import express from "express";
import request from "request";
import { getinventory } from "get-steam-inventory";

var steamid = "76561199119432593";
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

app.get("/", (req, res) => res.send(bulkList(steamid)));

app.listen(8460);

export default app;
