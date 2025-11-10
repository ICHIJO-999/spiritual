import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * 学習データテーブル：過去の顧客のチャット履歴と鑑定文を保存
 */
export const trainingData = mysqlTable("training_data", {
  id: int("id").autoincrement().primaryKey(),
  customerId: int("customer_id").notNull(),
  customerName: text("customer_name").notNull(),
  chatHistory: text("chat_history").notNull(),
  divinationText: text("divination_text").notNull(),
  noteLink: varchar("note_link", { length: 512 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type TrainingData = typeof trainingData.$inferSelect;
export type InsertTrainingData = typeof trainingData.$inferInsert;

/**
 * 生成履歴テーブル：新しい顧客の鑑定文生成履歴を保存
 */
export const generationHistory = mysqlTable("generation_history", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  inputChatHistory: text("input_chat_history").notNull(),
  generatedDivinationText: text("generated_divination_text").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type GenerationHistory = typeof generationHistory.$inferSelect;
export type InsertGenerationHistory = typeof generationHistory.$inferInsert;