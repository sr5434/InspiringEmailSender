# InspiringQuoteGenerator
A simple GPT-3 powered bot that writes inspring quotes.

# Architecture
## Backend
The backend is a Supabase edge function written in TypeScript and Deno. It calls the OpenAI API to generate the quote and it returns it in a JSON object
## Client
The client is a simple python script that calls the edge function and prints the quote.
# Getting started
First, add your OpenAI API key to index.ts in supabase/functions/QuoteGenerator. Then, deploy your function and add the link to the function to client/main.py.
# Examples
 - In Swarm, the behavior of the largest Lobby is across the fan from the smallest
 - The only way to do great work is to love what you do.
 - You are never too old to set new goals or to dream a new dream.
 - When you want something, all the universe conspires in helping you to achieve it
 # Ideas
  - Write a website frontend
  - Compare how different models perform
  - Add image generation