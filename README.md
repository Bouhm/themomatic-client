Themomatic is an experimental web app that tests LLMs' capabilities in coming up website themes based on a given concept.

## Getting Started

Install dependencies and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Server

The themomatic server uses the Hono API framework and is deployed as a Cloudflare worker. It has simple LLM service using the LangChain framework that utilizes tools and agents to fulfill requests with basic global rate limiting. 