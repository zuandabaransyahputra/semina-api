const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
// const db = require('./app/db')

// db()

const app = express();
// const port = process.env.PORT || 9000

// router
const categoriesRouter = require('./app/api/v1/categories/router');
const imagesRouter = require('./app/api/v1/images/router');
const talentsRouter = require('./app/api/v1/talents/router');
const eventsRouter = require('./app/api/v1/events/router');
const organizersRouter = require('./app/api/v1/organizers/router');
const authCMSRouter = require('./app/api/v1/auth/router');
const ordersRouter = require('./app/api/v1/orders/router');
const participantsRouter = require('./app/api/v1/participants/router');
const paymentsRouter = require('./app/api/v1/payments/router');
const userRefreshTokenRouter = require('./app/api/v1/userRefreshToken/router');

// middlewares
const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handler-error');

const v1 = '/api/v1/cms';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Welcome to semina api")
})

app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, talentsRouter);
app.use(v1, eventsRouter);
app.use(v1, organizersRouter);
app.use(v1, authCMSRouter);
app.use(v1, ordersRouter);
app.use(v1, paymentsRouter);
app.use(v1, userRefreshTokenRouter);
app.use('/api/v1', participantsRouter);


// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

// app.listen(port, () => {
//     console.log(`Server berhasil dijalankan pada port: ${port}`)
// })

module.exports = app;