
var net = require ('net');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router()
const config =  require('./db.config');
var operation = require('./dboperations');
const sql = require('mssql')






app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());
app.use('/',router)


var port = process.env.PORT || 8090;
app.listen(port);
console.log("App is Listening on :"+port);


router.use((req,res,next)=>{

    console.log('middleware');
    next();

})

router.route('/').get(async (req,res)=>{
    getConnection().then(resData=>{
        res.json(resData)
    })
})


getConnection().then(resData =>{
    console.log(resData);
}).catch(e=>{
    console.log(e)
})




async function getConnection(){
    try{
        let pool = await sql.connect(config);
        let response = await pool.query("select name from trdr")
        console.log(response)
        return response.recordsets;
    }
    catch (e) {
        console.log(e)
    }
}