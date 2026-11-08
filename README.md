# Timeless Archives

A full-stack web application with a product catalogue, account authentication, basket management, checkout integration, order handling and administration routes.

## Stack

- Front end: Next.js, React, Tailwind CSS, Material UI
- Back end: Node.js, Express, MongoDB/Mongoose
- Integrations: Stripe Checkout and Google OAuth

## Repository structure

```
frontend/  Next.js client application
backend/   Express API and MongoDB models
```

## Run locally

1. Install Node.js (LTS).
2. Copy `backend/.env.example` to `backend/.env` and enter your own local/test values.
3. Copy `frontend/.env.example` to `frontend/.env.local` and enter your own local/test values.
4. In separate terminals, install and run each application:

```bash
cd backend
npm install
node server.js
```

```bash
cd frontend
npm install
npm run dev
```

The client runs at `http://localhost:3000` and, with the supplied example configuration, calls the API at `http://localhost:5000`.

## Security note

This public-ready copy intentionally contains no live credentials or local environment files. Use your own development database and test payment credentials. Never commit `.env` files.

## Credits

This repository has been prepared as a portfolio copy of an academic project. Existing contributor credit is retained in the source where applicable.
