// "use server";

// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { GoogleGenAI } from "@google/genai";

// // Initialize Google GenAI client
// const genAI = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// // Gemini-2.5 flash model
// const modelName = "gemini-2.5-flash";

// /* ----------------------------- */
// /* Extract text safely from GenAI */
// /* ----------------------------- */
// function extractText(result) {
//   try {
//     return result.candidates[0].content.parts[0].text;
//   } catch (err) {
//     console.error("Gemini extractText() failed:", err);
//     throw new Error("Invalid AI response format");
//   }
// }

// /* -------------------------------------------------------- */
// /*                     GENERATE QUIZ                        */
// /* -------------------------------------------------------- */
// export async function generateQuiz() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//     select: { industry: true, skills: true },
//   });

//   if (!user) throw new Error("User not found");

//   const prompt = `
//     Generate 10 technical interview questions for a ${user.industry} professional${
//       user.skills?.length ? ` with expertise in ${user.skills.join(", ")}` : ""
//     }.

//     Each question should be multiple choice with 4 options.

//     Return ONLY this JSON format:
//     {
//       "questions": [
//         {
//           "question": "string",
//           "options": ["string", "string", "string", "string"],
//           "correctAnswer": "string",
//           "explanation": "string"
//         }
//       ]
//     }
//   `;

//   try {
//     const result = await genAI.models.generateContent({
//       model: modelName,
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: prompt }],
//         },
//       ],
//     });

//     const aiText = extractText(result)
//       .replace(/```json|```/g, "")
//       .trim();

//     const quiz = JSON.parse(aiText);

//     return quiz.questions;
//   } catch (error) {
//     console.error("Error generating quiz:", error);
//     throw new Error("Failed to generate quiz questions");
//   }
// }

// /* -------------------------------------------------------- */
// /*                 SAVE QUIZ RESULT + TIPS                  */
// /* -------------------------------------------------------- */
// export async function saveQuizResult(questions, answers, score) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   const questionResults = questions.map((q, index) => ({
//     question: q.question,
//     answer: q.correctAnswer,
//     userAnswer: answers[index],
//     isCorrect: q.correctAnswer === answers[index],
//     explanation: q.explanation,
//   }));

//   // Generate improvement tip if needed
//   let improvementTip = null;

//   const wrongAnswers = questionResults.filter((q) => !q.isCorrect);

//   if (wrongAnswers.length > 0) {
//     const wrongText = wrongAnswers
//       .map(
//         (q) =>
//           `Q: ${q.question}\nCorrect: ${q.answer}\nYour Answer: ${q.userAnswer}`
//       )
//       .join("\n\n");

//     const tipPrompt = `
//       The user missed these questions in a ${user.industry} technical quiz:

//       ${wrongText}

//       Provide one short improvement tip (max 2 sentences). 
//       Focus on what to learn, NOT the mistakes.
//     `;

//     try {
//       const tipResult = await genAI.models.generateContent({
//         model: modelName,
//         contents: [
//           {
//             role: "user",
//             parts: [{ text: tipPrompt }],
//           },
//         ],
//       });

//       improvementTip = extractText(tipResult).trim();
//     } catch (error) {
//       console.error("Error generating improvement tip:", error);
//     }
//   }

//   // Save to DB
//   try {
//     return await db.assessment.create({
//       data: {
//         userId: user.id,
//         quizScore: score,
//         questions: questionResults,
//         category: "Technical",
//         improvementTip,
//       },
//     });
//   } catch (error) {
//     console.error("Error saving quiz result:", error);
//     throw new Error("Failed to save quiz result");
//   }
// }

// /* -------------------------------------------------------- */
// /*                   GET USER ASSESSMENTS                   */
// /* -------------------------------------------------------- */
// export async function getAssessments() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });

//   if (!user) throw new Error("User not found");

//   try {
//     return await db.assessment.findMany({
//       where: { userId: user.id },
//       orderBy: { createdAt: "asc" },
//     });
//   } catch (error) {
//     console.error("Error fetching assessments:", error);
//     throw new Error("Failed to fetch assessments");
//   }
// }
"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

/* ---------------------------------------- */
/* CLEAN JSON OUTPUT FROM GEMINI            */
/* ---------------------------------------- */
function cleanJson(text) {
  return text.replace(/```json/g, "").replace(/```/g, "").trim();
}

/* ======================================== */
/*           GENERATE QUIZ QUESTIONS         */
/* ======================================== */
export async function generateQuiz() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true, skills: true },
  });

  if (!user) throw new Error("User not found");

  const prompt =
    `Generate 10 technical interview questions for a ${user.industry} professional ` +
    `${user.skills?.length ? `with expertise in ${user.skills.join(", ")}` : ""}. ` +
    `Each question must be multiple choice with 4 options. ` +
    `Return ONLY valid JSON:\n` +
    `{\n` +
    `  "questions": [\n` +
    `    {\n` +
    `      "question": "",\n` +
    `      "options": ["", "", "", ""],\n` +
    `      "correctAnswer": "",\n` +
    `      "explanation": ""\n` +
    `    }\n` +
    `  ]\n` +
    `}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = cleanJson(response.text());

    const quiz = JSON.parse(text);
    return quiz.questions;
  } catch (error) {
    console.error("Gemini Error (generateQuiz):", error);
    throw new Error("Failed to generate quiz questions");
  }
}

/* ======================================== */
/*        SAVE QUIZ RESULT + IMPROVEMENT     */
/* ======================================== */
export async function saveQuizResult(questions, answers, score) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  const questionResults = questions.map((q, i) => ({
    question: q.question,
    answer: q.correctAnswer,
    userAnswer: answers[i],
    isCorrect: q.correctAnswer === answers[i],
    explanation: q.explanation,
  }));

  /* ----- GENERATE IMPROVEMENT TIP (OPTIONAL) ----- */
  let improvementTip = null;

  const wrongAnswers = questionResults.filter((q) => !q.isCorrect);

  if (wrongAnswers.length > 0) {
    const wrongText = wrongAnswers
      .map((q) => `Q: ${q.question} | Correct: ${q.answer} | You: ${q.userAnswer}`)
      .join("\n");

    const tipPrompt =
      `Based on these incorrect answers from a ${user.industry} quiz:\n` +
      `${wrongText}\n\n` +
      `Give ONE improvement tip (max 2 sentences). No extra text.`;

    try {
      const tipRes = await model.generateContent(tipPrompt);
      const tipResponse = await tipRes.response;
      improvementTip = tipResponse.text().trim();
    } catch (e) {
      console.error("Gemini Error (Tip Generation):", e);
    }
  }

  /* ----- SAVE TO DATABASE ----- */
  try {
    return await db.assessment.create({
      data: {
        userId: user.id,
        quizScore: score,
        questions: questionResults,
        category: "Technical",
        improvementTip,
      },
    });
  } catch (error) {
    console.error("DB Error (saveQuizResult):", error);
    throw new Error("Failed to save quiz result");
  }
}

/* ======================================== */
/*            GET ALL ASSESSMENTS            */
/* ======================================== */
export async function getAssessments() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  return db.assessment.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
  });
}
