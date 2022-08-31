import express from "express";
import "dotenv/config";


const app = express();
const PORT = process.env.SERVER_PORT || 3000 ;

app.use(express.json())

app.listen(3000, () => console.log('serveur lancé sur le port 3000'));


