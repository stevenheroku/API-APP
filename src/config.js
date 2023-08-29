import {config} from 'dotenv'
config();
export default {
    port: 4200,
    host: process.env.HOST,
    database: process.env.DATABASE|| "",
    user: process.env.USER || "",
    password: process.env.PASSWORD | ""
}