
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBonusAdvisor = async (userPreference: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `El usuario está buscando un bono de casino con esta preferencia: "${userPreference}". Recomienda el tipo de bono ideal (poker, deportes o casino) y explica brevemente por qué. Mantén la respuesta breve y en español.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            reason: { type: Type.STRING },
            type: { type: Type.STRING, description: 'One of: poker, sports, casino' }
          },
          required: ['recommendation', 'reason', 'type']
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Advisor Error:", error);
    return {
      recommendation: "Bono de Bienvenida Estándar",
      reason: "No pudimos conectar con el asesor IA, pero te recomendamos empezar con el bono de bienvenida más equilibrado.",
      type: "casino"
    };
  }
};
