import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateStream(prompt: string) {
  try {
    const model = 'gemini-2.5-flash';
    const contents = prompt;

    const response = await ai.models.generateContentStream({
      model,
      contents,
    });
    
    return response;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}