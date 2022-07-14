var config = require('./db.config');
const sql  = require('mssql');


async function getConnection(){
    try{
        let pool = await sql.connect(config);
        let response = await pool.query("select name from trdr")
        console.log(response)
        return response.recordsets;
    }
    catch (e) {
        console.log()
    }
}

module.exports = {
    getConnection : getConnection
}