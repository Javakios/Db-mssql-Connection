const config ={
    server: '2.85.29.250',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'Puxa3418',  //update me

        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: 'pcadb',  //update me
        trustServerCertificate:true

    }
};

module.exports = config;