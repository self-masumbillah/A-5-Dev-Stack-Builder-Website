import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/A-5-Dev-Stack-Builder-Website/",
  plugins: [react(), tailwindcss()],
});