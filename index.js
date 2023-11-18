import express from "express";
import request from "request";
import { getinventory } from "get-steam-inventory";

var steamid = "76561198999425153";
let t = "";
const bulkList = (steamid) => {
    getinventory(730, steamid, 2)
        .then((data) => {
            t = data.marketnames;
            t = test;
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
