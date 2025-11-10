import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DebugEnv() {
  const { data, isLoading, refetch } = trpc.debug.checkEnv.useQuery();

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>環境変数デバッグ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoading && <p>読み込み中...</p>}
            {data && (
              <div className="space-y-2">
                <p><strong>OpenRouter APIキー設定:</strong> {data.hasOpenRouterApiKey ? '✅ 設定済み' : '❌ 未設定'}</p>
                <p><strong>APIキー長:</strong> {data.openRouterApiKeyLength}文字</p>
                <p><strong>APIキープレフィックス:</strong> {data.openRouterApiKeyPrefix}</p>
                <p><strong>NODE_ENV:</strong> {data.nodeEnv}</p>
                <p><strong>本番環境:</strong> {data.isProduction ? 'はい' : 'いいえ'}</p>
              </div>
            )}
            <Button onClick={() => refetch()}>再読み込み</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
