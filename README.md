# Semina API

REST API for an event ticketing platform: organizers publish events with speakers and ticket categories, participants sign up, verify their account with a one-time password and buy tickets.

The admin dashboard that consumes this API lives in [semina-admin](https://github.com/zuandabaransyahputra/semina-admin). Built as part of a full-stack bootcamp.

## Features

- **Role-based access** for `owner`, `admin` and `organizer` accounts, plus a separate participant flow
- **JWT authentication** with refresh tokens
- **CMS endpoints** (`/api/v1/cms`) for categories, talents (speakers), events, images, payment methods, organizers and orders
- **Participant endpoints** (`/api/v1`): sign up, activate account, sign in, browse events, checkout and order history
- **Email** via Nodemailer with Mustache templates for OTP verification and invoices
- **Image upload** with Multer
- Centralised error handling with HTTP status codes and request logging with Morgan

## Tech stack

Node.js, Express, MongoDB with Mongoose, JSON Web Token, bcryptjs, Multer, Nodemailer, Mustache.

## Getting started

```bash
git clone https://github.com/zuandabaransyahputra/semina-api.git
cd semina-api
npm install
cp .env.example .env   # fill in the values below
npm run dev
```

| Variable | Purpose |
|---|---|
| `PORT` | HTTP port |
| `URL_MONGODB_DEV` | MongoDB connection string |
| `SECRET_KEY` | Secret for signing JWTs |
| `gmail`, `password` | Gmail account and app password used to send OTP and invoice emails |
