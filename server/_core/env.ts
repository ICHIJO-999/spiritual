// 環境変数の読み込み状況をログ出力
console.log('[ENV] Loading environment variables...');
console.log('[ENV] NODE_ENV:', process.env.NODE_ENV);
console.log('[ENV] OPENROUTER_API_KEY exists:', !!process.env.OPENROUTER_API_KEY);
console.log('[ENV] OPENROUTER_API_KEY length:', process.env.OPENROUTER_API_KEY?.length || 0);

export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  openRouterApiKey: process.env.OPENROUTER_API_KEY ?? "",
};

console.log('[ENV] Loaded ENV object:', {
  hasAppId: !!ENV.appId,
  hasOpenRouterApiKey: !!ENV.openRouterApiKey,
  openRouterApiKeyLength: ENV.openRouterApiKey?.length || 0,
  isProduction: ENV.isProduction,
});
