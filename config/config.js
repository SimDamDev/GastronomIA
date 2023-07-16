import "dotenv/config.js";

export const config = {

    requireUnitIcons: false, // Change this to false if unit icons should not be required
    
    server:{
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    }
};