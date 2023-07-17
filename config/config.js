import 'dotenv/config.js';

export const config = {

  requireUnitIcons: false,
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  },
};
