import express from "express";
import { getinventory } from "get-steam-inventory";

var steamid = "76561198999425153";

const bulkList = (steamid) => {
    let t;
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
