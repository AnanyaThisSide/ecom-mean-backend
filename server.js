import express from "express";
import cors from "cors";

const PORT = 8000;

const app = express();

app.use(cors({
    origin: ['http://localhost:4200','http://mean-ecom.s3-website-us-east-1.amazonaws.com'],
    credentials: true
}))

app.use('/name/:id', (req, res, next) => {
    res.send('Welcome '+req.params.id+'!!');
});

app.listen(PORT);

