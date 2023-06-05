// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { OpenAI } from "https://deno.land/x/openai/mod.ts";

const openai = new OpenAI("YOUR-OPENAI-KEY");


serve(async (req) => {
  const response = await openai.createCompletion({
    model: "text-ada-001",
    prompt: "Write an inspiring quote:\n\"",
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["-", "\n"],
  });
  
  console.log(response.choices[0].text);
  const data = {
    message: `${response.choices[0].text}`,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})

