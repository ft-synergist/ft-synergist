import { NextResponse } from "next/server";
// 1. Correct import from the newly installed modern SDK package
import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, industry, revenueBand, strategicFocus } = body;

    if (!companyName || !industry || !revenueBand || !strategicFocus) {
      return NextResponse.json(
        { error: "Missing required compliance fields." },
        { status: 400 }
      );
    }

    // 2. Initialize the client securely using the modern instance framework
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

    const prompt = `
      You are an elite corporate expansion advisor specializing in ASEAN regulatory landscapes at FT Synergist.
      Analyze the following Singaporean enterprise seeking expansion into Vietnam via MRA/EDGE frameworks:
      
      - Company Name: ${companyName}
      - Core Industry: ${industry}
      - Current Revenue Band: ${revenueBand}
      - Expansion Strategic Focus: ${strategicFocus}

      Provide a highly precise, executive-grade Markdown diagnostic report evaluating their readiness for the contemporary 2026 Vietnamese market environment. 
      You MUST explicitly address the following regulatory and infrastructure realities based on their parameters:
      1. Financial & Tax Impacts: Address the 15% Global Minimum Tax (GMT) Decree 236/2025/ND-CP and shifting models from blanket rate discounts to cost-based subsidies/Qualified Refundable Tax Credits (QRTC)[cite: 2].
      2. Data Sovereignty & Cyber Laws: Detail compliance requirements for the Law on Personal Data Protection (PDPL) Law No. 91/2025/QH15 and Decree 356/2025/ND-CP, focusing heavily on the strict 2-day user request acknowledgment SLA and mandatory localized DPO frameworks[cite: 2].
      3. Labor Overheads: Evaluate exposure to the mandatory SHUI 34% contribution structures and basic salary inflation under Decree 161/2026/ND-CP[cite: 2].
      4. Strategic Moat Recommendation: Detail how they can break out of the "Legacy Export Trap" using localized regional processing clusters or AI-driven Franchise Management Systems (FMS), backed by Enterprise Singapore's 70% co-funded MRA grant framework (S$100,000 max target market cap)[cite: 2].

      Keep the tone direct, authoritative, and actionable. Do not use generic filler prose.
    `;

    // 3. Invoke the modern direct models generation method
    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro",
      contents: prompt,
    });

    return NextResponse.json({ auditReport: response.text }, { status: 200 });
  } catch (error: any) {
    console.error("Gemini Audit Route Exception:", error);
    return NextResponse.json(
      { error: "Internal compliance evaluation failure." },
      { status: 500 }
    );
  }
}