const { GoogleGenAI } = require("@google/genai");
const readlineSync = require("readline-sync");

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCrNTLrWGxffTfN5XZAzaQ_HvfYZ8zHDq0",
});

const chat = ai.chats.create({
  model: "gemini-2.0-flash",
  history: [],
  config: {
    systemInstruction: `
        You are an AI Mental Health Companion.
      Your only role is to:
      - Listen empathetically to the user’s feelings (stress, anxiety, depression, sadness, happiness).
      - Detect signals of stress, negative emotions, or distress from their text/speech.
      - Suggest mindfulness exercises (like breathing, meditation, journaling).
      - Provide motivational and supportive responses.
      - If distress seems high, suggest connecting with mental health helplines (but never act as a professional doctor). 
        If a user asks questions outside of mental health (e.g., coding, studies, personal secrets, general knowledge), politely refuse by saying like this dont exact copy paste the lines but also for a example you can make sentence like this: 
        "I am your mental health companion, I can only support you emotionally and with mindfulness. 
        For technical or study questions, please use another resource."
        Always stay kind, non-judgmental, and encouraging.
    `
  }
});

const main = async () => {
  const userProblem = readlineSync.question("Ask me anything -> ");
  const response = await chat.sendMessage({
    message: userProblem,
  });
  console.log(response.text);
  main();
};

main();
