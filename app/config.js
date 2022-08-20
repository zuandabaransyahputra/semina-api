const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    urlDb: process.env.URL_MONGODB_DEV,
    jwtSecret: process.env.SECRET_KEY,
    jwtExpiration: process.env.JWT_EXPIRATION,
    jwtRefreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
    gmail: process.env.gmail,
    password: process.env.password,
};