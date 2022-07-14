
var net = require ('net');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = net.createServer()
const router = express.Router()

app.


const config ={server: '2.85.29.250',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'Puxa3418',  //update me

        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'pcadb',  //update me
        trustServerCertificate:true

    }
};

const sql  = require('mssql');


async function getConnection(){
    try{
        let pool = await sql.connect(config);
        let response = await pool.query("select name from trdr")
        return response.recordsets;
    }
    catch (e) {
        console.log()
    }
}



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
    try{
        let pool = await sql.connect(config);
        let response = await pool.query("select name from trdr")
        res.json(response.recordsets);
    }
    catch (e) {
        res.json(e)
    }
})


getConnection().then(resData =>{
    console.log(resData);
}).catch(e=>{
    console.log(e)
})