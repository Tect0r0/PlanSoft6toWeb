import sql from "mssql";

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

const sqlConnect = async () => {
    try {
        const pool = await sql.connect(sqlConfig);
        return pool;
    } catch (err) {
        console.error("SQL Connection Error:", err);
        throw err;
    }
};

export { sqlConnect, sql };
