import { LLM } from "@/types"

const GROQ_PLATORM_LINK = "https://groq.com/"

const LLAMA3_8B_INSTANT: LLM = {
  modelId: "llama-3.1-8b-instant",
  modelName: "Llama 3.1 8B Instant",
  provider: "groq",
  hostedId: "llama-3.1-8b-instant",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.05,
    outputCost: 0.08
  }
}

const LLAMA3_70B_VERSATILE: LLM = {
  modelId: "llama-3.3-70b-versatile",
  modelName: "Llama 3.3 70B Versatile",
  provider: "groq",
  hostedId: "llama-3.3-70b-versatile",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.79
  }
}

const LLAMA3_70B_SPECDEC: LLM = {
  modelId: "llama-3.3-70b-specdec",
  modelName: "Llama 3.3 70B SpecDec",
  provider: "groq",
  hostedId: "llama-3.3-70b-specdec",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.99
  }
}

const GEMMA2_9B: LLM = {
  modelId: "gemma2-9b-it",
  modelName: "Gemma 2 9B",
  provider: "groq",
  hostedId: "gemma2-9b-it",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.2,
    outputCost: 0.2
  }
}

const COMPOUND_BETA: LLM = {
  modelId: "compound-beta",
  modelName: "Compound Beta",
  provider: "groq",
  hostedId: "compound-beta",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.0,
    outputCost: 0.0
  }
}

export const GROQ_LLM_LIST: LLM[] = [
  LLAMA3_8B_INSTANT,
  LLAMA3_70B_VERSATILE,
  LLAMA3_70B_SPECDEC,
  GEMMA2_9B,
  COMPOUND_BETA
]
