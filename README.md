# 💸 Personal Finance Visualizer

A modern, responsive full-stack web application to **track personal expenses**. Built with **Next.js 14**, **MongoDB**, **Tailwind CSS**, **shadcn/ui**, **Recharts**, and animated with **Framer Motion** — it offers a sleek interface to manage transactions and visualize spending.

---

## 🚀 Features

### ✅ Stage 1: Basic Transaction Tracking

* ➕ Add / ✏️ Edit / ❌ Delete transactions (amount, date, description)
* 📃 List view of recent transactions
* 📊 Monthly expenses bar chart
* ✅ Form validation with error states
* 🌙 Dark mode + responsive UI
* 🔔 Toast notifications using `sonner`

> ✅ Fully functional and deployed live!

---

## 🌐 Live Demo

🔗 [Live App on Vercel](https://personal-finance-visualizer.vercel.app)

📦 [GitHub Repository](https://github.com/KishanThorat111/personal-finance-visualizer)

---

## 🧠 Tech Stack

![License](https://img.shields.io/github/license/KishanThorat111/personal-finance-visualizer?style=flat-square)
![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000?logo=nextdotjs&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/UI-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?logo=mongodb&logoColor=white&style=flat-square)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&style=flat-square)
![Stage](https://img.shields.io/badge/Stage-1-green?style=flat-square)


| Tech                | Usage                                    |
| ------------------- | ---------------------------------------- |
| **Next.js**         | Full-stack React framework               |
| **MongoDB**         | NoSQL database with Mongoose ORM         |
| **Tailwind CSS**    | Utility-first styling                    |
| **shadcn/ui**       | Styled components with accessibility     |
| **Framer Motion**   | Smooth component animations              |
| **Recharts**        | Interactive charting for expense visuals |
| **React Hook Form** | Simplified form handling + validation    |
| **Lucide Icons**    | Clean icons for actions                  |
| **Sonner**          | Toast notifications                      |

---


### 🧾 Add & Edit Transactions


### 📜 Transaction List with Actions


### 📊 Monthly Chart


## 🧩 Project Structure

```
personal-finance-visualizer/
├── app/
│   ├── api/
│   │   └── transactions/route.ts       // POST + GET
│   │   └── transactions/[id]/route.ts // PATCH + DELETE
│   └── page.tsx                       // Dashboard
├── components/
│   ├── TransactionForm.tsx
│   ├── TransactionList.tsx
│   ├── MonthlyChart.tsx
│   └── ui/toaster.tsx
├── lib/mongo.ts
├── models/Transaction.ts
├── .env.local
```

---

## ⚙️ Setup & Installation

### ✅ Step 1: Clone the repo

```bash
git clone https://github.com/KishanThorat111/personal-finance-visualizer.git
cd personal-finance-visualizer
```

### ✅ Step 2: Install dependencies

```bash
npm install
```

### ✅ Step 3: Setup MongoDB

Create `.env.local` in the root:

```env
MONGODB_URI="your_mongodb_connection_string"
```

### ✅ Step 4: Run the app

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📅 Development Timeline & Commits

### Step-by-step commits:

````bash
git commit -m "feat: initial project setup with Next.js, MongoDB, Tailwind"
git commit -m "chore: install required libraries and setup shadcn/ui components"
git commit -m "feat: setup MongoDB connection and Transaction model"
git commit -m "feat: create API routes for CRUD transactions"
git commit -m "feat: create transaction form component with react-hook-form"
git commit -m "feat: create transaction list component with edit/delete actions"
git commit -m "feat: add monthly bar chart visualization using Recharts"
git commit -m "feat: build dashboard layout and integrate transaction features"\```

---

## 🧪 What's Next? (Stage 2 Preview)

- 🧾 Category-based tagging
- 🥧 Category-wise pie chart
- 📊 Budget vs Actual insights
- 💡 Dashboard cards (summary, most recent, top category)

---

## 📄 License

MIT License © 2025 [Kishan Thorat](https://github.com/KishanThorat111)

---

## 🤝 Connect

💼 [LinkedIn](https://linkedin.com/in/yourprofile)  
💻 [GitHub](https://github.com/KishanThorat111)

---

> Built with ❤️ using Next.js, Tailwind, MongoDB, and Recharts

````
