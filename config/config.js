import "dotenv/config.js";

export const config = {
    server:{
        port: process.env.PORT,
        host: process.env.HOST
    }
};