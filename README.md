# Timeless Archives

A full-stack web application with a product catalogue, account authentication, basket management, checkout integration, order handling and administration routes.

## Review the project

- [Portfolio overview](https://rr11ddzz.github.io/portfolio/#timeless-archives)
- [Original 2025 homepage preview](https://frontendwatch-ashen.vercel.app/)

The original Vercel homepage was accessible when checked on 9 November 2026, but the catalogue returned an error. Treat that deployment as a historical UI preview: it includes sample marketing content and is not a functioning shop. Account and payment flows have not been verified on that deployment.

## Code walkthrough

1. [Client state and API requests](frontend/context/state.js): account state, product queries, cart updates and checkout requests.
2. [Express routes](backend/routes): user, basket, payment, order and administration endpoints.
3. [Backend application](backend/app.js): API composition and middleware.

The browser uses a Next.js/React interface, which calls an Express API backed by MongoDB/Mongoose. Stripe Checkout and Google OAuth are external integrations that require separate configuration.

## Current limitations and next steps

This is an academic portfolio project, not a production-readiness claim. A complete interactive demo needs a configured API, test database and test integration credentials. Next steps are to restore a test-data deployment, replace placeholder marketing content and add automated tests for the catalogue, authentication and checkout workflows.

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
