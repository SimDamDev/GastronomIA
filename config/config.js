import "dotenv/config.js";

export const config = {

    requireUnitIcons: false, // Change this to false if unit icons should not be required
export const config = {
    server:{
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    }
};