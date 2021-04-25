const mysql = require("promise-mysql")

const connection = mysql.createConnection({
    host:"localhost",
    user:"nestor2",
    password:"mofin501",
    database:"hacknow"
})

function getConnection(){
    return connection;
}

module.exports = {
    getConnection
}