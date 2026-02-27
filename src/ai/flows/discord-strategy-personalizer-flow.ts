'use server';
/**
 * @fileOverview An AI agent that provides personalized tips for Discord monetization strategies.
 *
 * - discordStrategyPersonalizer - A function that handles the generation of personalized Discord monetization tips.
 * - DiscordStrategyPersonalizerInput - The input type for the discordStrategyPersonalizer function.
 * - DiscordStrategyPersonalizerOutput - The return type for the discordStrategyPersonalizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiscordStrategyPersonalizerInputSchema = z.object({
  businessGoals: z
    .string()
    .describe("User's business goals related to Discord monetization."),
});
export type DiscordStrategyPersonalizerInput = z.infer<
  typeof DiscordStrategyPersonalizerInputSchema
>;

const DiscordStrategyPersonalizerOutputSchema = z.object({
  tip: z
    .string()
    .describe(
      'A concise, personalized tip or conceptual starting point for Discord monetization relevant to the user\'s goals.'
    ),
});
export type DiscordStrategyPersonalizerOutput = z.infer<
  typeof DiscordStrategyPersonalizerOutputSchema
>;

export async function discordStrategyPersonalizer(
  input: DiscordStrategyPersonalizerInput
): Promise<DiscordStrategyPersonalizerOutput> {
  return discordStrategyPersonalizerFlow(input);
}

const discordStrategyPersonalizerPrompt = ai.definePrompt({
  name: 'discordStrategyPersonalizerPrompt',
  input: {schema: DiscordStrategyPersonalizerInputSchema},
  output: {schema: DiscordStrategyPersonalizerOutputSchema},
  prompt: `You are an expert in building high-conversion Discord monetization strategies for massive scale and low-ticket products. Your goal is to provide a concise, conceptual starting point or tip based on the user's business goals to help them understand how Discord can be leveraged for monetization.
Focus on strategy and direction, not specific technical steps. The tip should demonstrate the value of building a structured Discord community for predictable income, emphasizing control over open platforms.

User's business goals: {{{businessGoals}}}`,
});

const discordStrategyPersonalizerFlow = ai.defineFlow(
  {
    name: 'discordStrategyPersonalizerFlow',
    inputSchema: DiscordStrategyPersonalizerInputSchema,
    outputSchema: DiscordStrategyPersonalizerOutputSchema,
  },
  async input => {
    const {output} = await discordStrategyPersonalizerPrompt(input);
    return output!;
  }
);
