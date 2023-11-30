import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
import { scrape } from "./scrape.js";

const PORT = process.env.PORT | 3333;

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static("public"));
server.use(morgan('dev'));

//Endpoint that recieve a query "word" that want to search about it (in this case, to get the first synonym of "word" from the website thesaurus.com)
server.post('/synonym', async (req, res)=>{
    const {word} = req.query;
    try {
        if(!word){
            throw new Error("Yep! something went wrong.");
        }
        const result = await scrape(word);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});


server.listen(PORT, async ()=>{
    console.log("bysWebScraping server is running...");
});