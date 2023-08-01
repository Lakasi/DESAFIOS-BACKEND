import fs from 'fs/promises'
import express from 'express'

const app = express()

async function parseFile() {
    const products = await fs.readFile( './products.json', 'utf-8')
    return JSON.parse(products);
}

app.get("/products", async (req, res) => {
   
    const queryLimit = req.query.limit

    if (!isNaN(queryLimit) && queryLimit >= 0){
        const productsJSON = parseFile();
        let productsLimit = [];
       
        for (let i = 0 ; i<queryLimit ; i++ ){
            productsLimit[i] = productsJSON[i];
        }
        res.json(productsLimit);
    } else {
        const productsJSON = await parseFile();
        res.json(productsJSON);
    }
})

app.get("/productsRandom", async (req, res) => {
    const productsJSON = await parseFile();
    const aleatorio = productsJSON[Math.floor(Math.random() * productsJSON.length)]
    res.json(aleatorio)
})

app.listen(8080)