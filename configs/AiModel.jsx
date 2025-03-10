const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const AIDesignIdea = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Based on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with description: Indian Restaurant and referring to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"ideas\": [\n    \"Chef Elephant with spice\",\n    \"Smiling Curry Bowl character\",\n     \"Animated Chef with Naan\",\n    \"Friendly Tiger holding Masala\",\n    \"Playful Mango Chef mascot\"\n  ]\n}\n```\n"},
        ],
      },
    ],
  });


  export const AILogoPrompt = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a text prompt to create Logo for Logo Title/Brand name : p bar,with description: old bar, with Color combination of Earthy Browns, also include the Vintage Custom Logos design idea and Referring to this Logo Prompt:Generate a vintage, hand-drawn logo in a circular format. The logo should feature a central illustration, such as a symbol, icon, or image related to the brands identity. The illustration should be detailed and stylized, with a focus on linework and shading. The logo should also include the brand name, written in a vintage, decorative font. The overall aesthetic should be retro and nostalgic, evoking a sense of tradition and quality.  Give me result in JSON portal with prompt field only"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"prompt\": \"Generate a vintage, hand-drawn logo in a circular format for \\\"p bar\\\", an old bar. The logo should use an earthy brown color palette. The central illustration should feature a stylized, detailed image relevant to an old bar - perhaps a classic cocktail glass, a vintage beer tap, or a stylized 'P' intertwined with a barley stalk. Focus on intricate linework and shading to give it a hand-crafted feel. The brand name \\\"p bar\\\" should be written in a vintage, decorative font, arranged elegantly within the circular frame. The overall aesthetic should be retro and nostalgic, evoking a sense of tradition, quality, and the ambiance of an old-fashioned bar.\"\n}\n```\n"},
        ],
      },
    ],
  });


  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());
