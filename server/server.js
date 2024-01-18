import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // calls a function to configure the .env variables and grants access to env variables stored in .env without exposure

// create app
const PORT = 8080; // port variable
const app = express(); // initialised a new express application called app

const dbConnectionsString = process.env.DATABASE_URL; // gets the connection string from .env
const db = new pg.Pool({ connectionString: dbConnectionsString });

app.use(cors()); // tells the express application to use the cors middleware by passing cors() enabling access from different domains

app.get("/", (request, response) => {
  response.json("This is the root route");
});

app.listen(PORT, () => console.log(`app is running on ${PORT}`));

app.get("/all", async (request, response) => {
  const result = await db.query(`SELECT 
    products.name, 
    categories.product_type, 
    brand.brand_name,      
    company.company_name, 
    STRING_AGG(colors.color, ', ' ORDER BY colors.color) AS colors
FROM products
JOIN categories ON products.category_id = categories.id
JOIN brand ON products.brand_id = brand.id
JOIN company ON brand.company_id = company.id
JOIN product_color_junction ON products.id = product_color_junction.product_id
JOIN colors ON product_color_junction.color_id = colors.id
GROUP BY products.name, categories.product_type, brand.brand_name, company.company_name`);
  response.json(result.rows);
});
