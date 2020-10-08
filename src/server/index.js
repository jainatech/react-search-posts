const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit : '50mb' }))
app.use(bodyParser.urlencoded( { limit : "50mb", extended: true } ))

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    next();
})

app.use("/api/v1",require('./api/routes'))

const { GeneralResponse, GeneralError }  = require('./api/helper/Response')

app.use((response,req,res,next) => {
    if(response instanceof GeneralResponse) {
        return res.status(200).json({
            status : true,
            code : 200,
            message : response.message,
            result : response.result
        })
    }else if (response instanceof GeneralError){
        return res.status(200).json({
            status : false,
            code : 500,
            message : response.message
        })
    }
    next(response);
})


const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log(`Listening to Port : ${port}`)
})


module.exports = app;
