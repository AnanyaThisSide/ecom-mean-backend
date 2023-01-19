import express from "express";

const PORT = 8000;

const app = express();
app.use('/name/:id', (req, res, next) => {
    res.send('Welcome '+req.params.id+'!!');
});

app.listen(PORT);

