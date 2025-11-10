import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { generateDivinationText } from "./divination";
import { generateDivinationTextNewStyle } from "./divination-new-style";
import { getUserGenerationHistory, saveGenerationHistory } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  divination: router({
    // 章別生成方式で鑑定文を生成する（質優先）
    generateByChapters: protectedProcedure
      .input(z.object({
        chatHistory: z.string().min(1, 'チャット履歴を入力してください'),
      }))
      .mutation(async ({ ctx, input }) => {
        // 章別生成方式で鑑定文を生成
        const { getAllTrainingData } = await import("./db");
        const trainingData = await getAllTrainingData();
        
        // 顧客名を抽出
        const nameMatch = input.chatHistory.match(/①([^\n]+)/);
        const customerName = nameMatch ? nameMatch[1].trim().replace(/\s+男|\s+女/, '') : 'お客様';
        
        const divinationText = await generateDivinationTextNewStyle(input.chatHistory);
        
        // 生成履歴を保存
        await saveGenerationHistory({
          userId: ctx.user.id,
          inputChatHistory: input.chatHistory,
          generatedDivinationText: divinationText,
        });
        
        return {
          divinationText,
        };
      }),
    
    // 鑑定文を生成する（一発生成方式）
    generate: protectedProcedure
      .input(z.object({
        chatHistory: z.string().min(1, 'チャット履歴を入力してください'),
      }))
      .mutation(async ({ ctx, input }) => {
        // 鑑定文を生成
        const divinationText = await generateDivinationText(input.chatHistory);
        
        // 生成履歴を保存
        await saveGenerationHistory({
          userId: ctx.user.id,
          inputChatHistory: input.chatHistory,
          generatedDivinationText: divinationText,
        });
        
        return {
          divinationText,
        };
      }),
    
    // 生成履歴を取得する
    history: protectedProcedure.query(async ({ ctx }) => {
      const history = await getUserGenerationHistory(ctx.user.id);
      return history;
    }),
  }),
});

export type AppRouter = typeof appRouter;
