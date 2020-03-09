module.exports = {
    "development": {
        "username": "root",
        "password": "root",
        "database": "mydb",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false,
        "dialectOptions" : {
            "socketPath" : "/Applications/MAMP/tmp/mysql/mysql.sock"
        }
    },
    "test": {
        "username": "root",
        "password": "null",
        "database": "database",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false,
    },
    "production": {
        "username": "root",
        "password": "null",
        "database": "database",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false,
    }
}