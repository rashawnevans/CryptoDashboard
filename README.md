# Stand Alone Vercel App to Display Crypto Data Over 24-Hour Period

## Vercel Link

- https://crypto-dashboard-3o8c.vercel.app/

## Installation

Install dependencies:

```bash
npm i
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Layout

![Screenshot of Crypto Dashboard](https://raw.githubusercontent.com/rashawnevans/CryptoDashboard/main/public/screenshot.png)

## Errors & Limitations

- Currently not optimized for mobile devices
- API may not return data if the crypto currency isn't found
- Max & Min lines may not display properly for cryptocurrencies with very small values

## API for Reference

- https://docs.coincap.io/#e1c56fd0-d57a-40dd-8a24-4b0883b58cfb

- valid intervals: m1, m5, m15, m30, h1, h2, h6, h12, d1': Interval must be m1 for one minute, m5 for 5 minute, m15 for 15 minute, m30 for 30 minute, h1 for one hour, h2 for 2 hour, h6 for 6 hour, h12 for 12 hour, and d1 for one day

## API Limitations

Currenting using: Free Tier with no API Key.

Free Tier (No API Key):

- 200 requests per minute
- 11 years historical data

Free Tier (API Key)

- 500 requests per minute
- 11 years historical data
