// src/ai/flows/generate-monastery-content.ts
'use server';

/**
 * @fileOverview Generates educational content for a monastery based on descriptions and images of artifacts.
 *
 * - generateMonasteryContent - A function that generates content for a monastery.
 * - GenerateMonasteryContentInput - The input type for the generateMonasteryContent function.
 * - GenerateMonasteryContentOutput - The return type for the generateMonasteryContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMonasteryContentInputSchema = z.object({
  artifactDescription: z
    .string()
    .describe('Description of the artifact, sculpture, or mural.'),
  artifactImageUri: z
    .string()
    .describe(
      "A photo of the artifact, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  userLocation: z
    .string()
    .optional()
    .describe('The location of the user to enhance the content.'),
});
export type GenerateMonasteryContentInput = z.infer<
  typeof GenerateMonasteryContentInputSchema
>;

const GenerateMonasteryContentOutputSchema = z.object({
  educationalContent: z
    .string()
    .describe('Generated educational content for the monastery.'),
});
export type GenerateMonasteryContentOutput = z.infer<
  typeof GenerateMonasteryContentOutputSchema
>;

export async function generateMonasteryContent(
  input: GenerateMonasteryContentInput
): Promise<GenerateMonasteryContentOutput> {
  return generateMonasteryContentFlow(input);
}

const generateMonasteryContentPrompt = ai.definePrompt({
  name: 'generateMonasteryContentPrompt',
  input: {schema: GenerateMonasteryContentInputSchema},
  output: {schema: GenerateMonasteryContentOutputSchema},
  prompt: `You are an expert in Sikkimese monasteries, artifacts, sculptures, and murals. Generate educational content based on the provided description and image of the artifact. The generated content will be displayed in a mobile app to tourists and researchers.

  Consider the user's location ({{{userLocation}}}) to tailor the content and enhance their experience, if location is present.

  Description: {{{artifactDescription}}}
  Image: {{media url=artifactImageUri}}

  Content:`,
});

const generateMonasteryContentFlow = ai.defineFlow(
  {
    name: 'generateMonasteryContentFlow',
    inputSchema: GenerateMonasteryContentInputSchema,
    outputSchema: GenerateMonasteryContentOutputSchema,
  },
  async input => {
    const {output} = await generateMonasteryContentPrompt(input);
    return output!;
  }
);
