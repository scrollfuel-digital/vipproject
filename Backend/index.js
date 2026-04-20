import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
let app = express();
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} || http://127.0.0.1:${port}`);
});
