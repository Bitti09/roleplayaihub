# 🎭 Roleplay AI Hub (v0.0.1)

Welcome to **Roleplay AI Hub**, a curated directory of the best AI models, frontends, and tools tailored specifically for interactive text-based roleplay and creative writing. 

This directory is designed to help you quickly find the right tools and settings for your creative storytelling adventures.

---

## ✨ Features

- 🧠 **Curated AI Models:** Find models optimized for narrative writing, with clear labels for base model lineages, licensing, and NSFW content capabilities.
- ⚙️ **One-Click Settings:** View recommended parameters (such as Temperature, Min P, and Repetition Penalty) inside simple settings popups.
- 📝 **Additional Notes:** Collapsible tips and prompt template recommendations for each model.
- 🧭 **Categorized Navigation:** Easy browsing with a dynamic sidebar that automatically tracks your scroll position.
- ⚡ **WIP Alert Bar:** A top banner informing users about active development status and content updates.

---

## 🚀 Getting Started

### How to Run Locally

If you want to run the website on your own computer:

1. **Pre-requisites:** Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Install Dependencies:** Open your terminal inside the project directory and run:
   ```bash
   pnpm install
   ```
3. **Start Development Server:** Run the following command:
   ```bash
   pnpm dev
   ```
4. **View the Site:** Open [http://localhost:4321/](http://localhost:4321/) in your web browser!

---

## ✍️ How to Add or Edit Resources

All content on the site is stored in simple, human-readable text files (YAML format) inside the `src/content/` folder.

To add a new resource:
1. Navigate to the appropriate folder:
   - `src/content/ai-models/` for AI models.
   - `src/content/frontends/` for user interfaces.
   - `src/content/tools/` for other software and tools.
2. Create a new `.yaml` file (e.g., `my-model.yaml`).
3. Fill in the resource details (name, description, tags, etc.) using the existing files as examples!
4. The website will automatically update with your new content.
