const mysql = require('mysql2');

(() => {
    let FetchFromDBDynamicValue;

    FetchFromDBDynamicValue = () => {
        this.evaluate = (context) => {
            let result = 0;

            if(this.query) {
                // initialize connection
                const con = mysql.createConnection(
                    {
                        host: this.host,
                        user: this.user,
                        password: this.password,
                        database: this.database
                    }
                );
                // run query
                con.query(this.query, (err, rows) => {
                    // close connection
                    con.close();
                    
                    if(!err) result = rows[0][this.column];
                });
            }
            return result;
        };

        this.title = () => {
            return "Dynamic Value";
        };

        this.text = () => {
            return "Generated Token";
        };
    };

    FetchFromDBDynamicValue.identifier = "io.clovisphere.PawExtensions.FetchFromDBDynamicValue";
    FetchFromDBDynamicValue.title = "Fetch Dynamic Value from Database";
    FetchFromDBDynamicValue.inputs = [
        InputField("host", "Host", "String"),
        InputField("user", "Username", "String"),
        InputField("password", "Password", "String"),
        InputField("database", "DB", "String"),
        InputField("column", "Column to fetch", "String"),
        InputField("query", "SQL Query", "String")
    ];

    registerDynamicValueClass(FetchFromDBDynamicValue);

}).call(this);
