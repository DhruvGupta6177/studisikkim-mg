'use server';

/**
 * @fileOverview A flow for chatting about Sikkimese monasteries.
 *
 * - chatAboutMonasteries - A function that handles the chat conversation.
 * - ChatInput - The input type for the chatAboutMonasteries function.
 * - ChatOutput - The return type for the chatAboutMonasteries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {monasteries} from '@/lib/monastery-data';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe("The chat history."),
  query: z.string().describe('The user\'s latest query.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI\'s response to the user query.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

// Convert monastery data to a string for the prompt
const monasteryDataString = monasteries
  .map(
    m =>
      `Name: ${m.name}, Location: ${m.location}, Established: ${
        m.established
      }, Description: ${m.description.en}, History: ${
        m.history.en
      }, Significance: ${m.significance.en}`
  )
  .join('\n\n');

export async function chatAboutMonasteries(
  input: ChatInput
): Promise<ChatOutput> {
  return chatAboutMonasteriesFlow(input);
}

const chatPrompt = ai.definePrompt({
  name: 'chatAboutMonasteriesPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are an expert guide on Sikkimese monasteries. Your goal is to answer user questions based on the provided context information and the chat history. Be friendly, helpful, and concise.

  Here is the information you have about the monasteries:
  ---
  {{{context}}}
  ---
  
  Now, continue the conversation based on the history and the user's latest query.

  {{#each history}}
  {{#if (eq role 'user')}}
  User: {{{content}}}
  {{else}}
  Model: {{{content}}}
  {{/if}}
  {{/each}}
  
  User: {{{query}}}
  Model:`,
});

const chatAboutMonasteriesFlow = ai.defineFlow(
  {
    name: 'chatAboutMonasteriesFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await chatPrompt({
      ...input,
      context: monasteryDataString,
    });
    return output!;
  }
);