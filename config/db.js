import Sequalieze from "sequelize";
import dotenv from 'dotenv/config'

const db = new Sequalieze(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquier: 3000,
        idle: 10000,
    },
    operatorAlias: false
});

export default db;