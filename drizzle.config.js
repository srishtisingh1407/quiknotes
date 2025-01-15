import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
   url :'postgresql://neondb_owner:YlevW4gG6tDA@ep-winter-sunset-a5aifd25.us-east-2.aws.neon.tech/Ai-Study_Material-Gen?sslmode=require'
  },
});
