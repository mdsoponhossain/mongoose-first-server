// external imports ;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//internal imports(custom imports)
const middleWareFunc = require('./middleWares/server-middleware');
const connectDB = require('./connectionDB/connectionDB');
const userRouter = require('./routes/userRoute/userRoute');

// middleWares ;
middleWareFunc(app, express, cors);


//api routes ;
app.use('/user',userRouter)








// server health checking function or route ;
app.get("/health", (req, res) => {
    res.send("আমাদের মঙ্গুজ সার্ভার এখন সুস্থ....").status(200)
})
// error handler functions ;

app.all('*', (req, res, next) => {
    const error = new Error(`[Your Requested URL is Invalid ${req.url}]`);
    next(error);
});

app.use((error, req, res, next) => {
    if (error) {
        res.json({ Error_Message: error.message }).status(500)
    }
});

async function main() {
    await app.listen(port, () => {
        console.log(`Our mongoose server is running on the port ${port}`)
    });
    connectDB();
};
main();