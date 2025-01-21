Themomatic is an experimental web app that tests LLMs' capabilities in coming up website themes based on a given concept.

## Getting Started

Install dependencies and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Server

The themomatic server uses the Hono API framework and is deployed as a Cloudflare worker. It has simple LLM service using the LangChain framework that utilizes tools and agents to fulfill requests with basic global rate limiting. 

## Basic Features

- Retrieving background image from web search
- Loading fonts dynamically
- Dynamic custom CSS

## Enhancements

For much less retricted use of LLMs, defining functions to safely create HTML elements and styling them atomically with CSS frameworks or with raw CSS (depending on the LLM knowledge) would allow for a much wider variety and freeform outputs. This is outside of the scope of this project as it would draw significantly more overhead on token usage and response times.