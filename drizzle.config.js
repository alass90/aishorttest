/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:qf9yuHKdF7rN@ep-purple-fog-a5h4zg8e.us-east-2.aws.neon.tech/neondb?sslmode=require'
    }
  };