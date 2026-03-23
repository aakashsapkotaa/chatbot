# AK Chat 💬

> A personal AI chat application — built and owned by **[aakashsapkotaa](https://github.com/aakashsapkotaa)**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./license)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Supabase-Local-green)](https://supabase.com)

---

## ✨ Features

- 🤖 Chat with multiple AI models (Groq, OpenAI, Anthropic, Google Gemini)
- 🗂️ Workspaces, folders, and chat history
- 📁 File upload & RAG support
- 🌙 Dark/light mode with violet accent theme
- 📱 PWA — installable on mobile

## 🚀 Quick Start (Local)

### Prerequisites

- [Node.js v20+](https://nodejs.org)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Supabase CLI](https://supabase.com/docs/guides/cli)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start Supabase backend (requires Docker)
npx supabase start

# 3. Get your local Supabase keys
npx supabase status

# 4. Create your env file
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL and keys from step 3
# Add at least one AI API key (e.g. GROQ_API_KEY)

# 5. Reset the database
npx supabase db reset

# 6. Start the app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and sign up with any email/password.

## 🔑 Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# Required — Supabase
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Add at least one AI API key
GROQ_API_KEY=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_GEMINI_API_KEY=
```

## 🧠 Supported AI Models (via Groq — free & fast)

| Model | Notes |
|---|---|
| Llama 3.1 8B Instant | Fastest |
| Llama 3.3 70B Versatile | Best quality |
| Gemma 2 9B | Balanced |
| Compound Beta | Agentic |

## 📄 License

MIT — Copyright © 2026 **Aakash Sapkota (aakashsapkotaa)**
