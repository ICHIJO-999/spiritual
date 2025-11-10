import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { trpc } from "@/lib/trpc";
import { Loader2, History as HistoryIcon, Eye, Copy, Check, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";

export default function History() {
  const { user, loading: authLoading } = useAuth();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  
  const { data: history, isLoading } = trpc.divination.history.useQuery(undefined, {
    enabled: !!user,
  });

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("鑑定文をコピーしました");
    setTimeout(() => setCopied(false), 2000);
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <Card className="max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <HistoryIcon className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">ログインが必要です</CardTitle>
            <CardDescription>
              生成履歴を表示するにはログインしてください
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={getLoginUrl()}>ログイン</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container py-8 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <HistoryIcon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            生成履歴
          </h1>
          <p className="text-muted-foreground text-lg">
            過去に生成した鑑定文の履歴を確認できます
          </p>
        </div>

        {!history || history.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <HistoryIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-lg text-muted-foreground mb-4">
                まだ鑑定文を生成していません
              </p>
              <Button asChild>
                <a href="/generate">鑑定文を生成する</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-lg">
                        生成日時: {new Date(item.createdAt).toLocaleString('ja-JP')}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        入力文字数: {item.inputChatHistory.length.toLocaleString()} 文字 / 
                        生成文字数: {item.generatedDivinationText.length.toLocaleString()} 文字
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedItem(item)}
                      className="gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      詳細を見る
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2 font-semibold">
                      生成された鑑定文(抜粋):
                    </p>
                    <p className="text-sm line-clamp-3">
                      {item.generatedDivinationText}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* 詳細ダイアログ */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              生成日時: {selectedItem && new Date(selectedItem.createdAt).toLocaleString('ja-JP')}
            </DialogTitle>
            <DialogDescription>
              鑑定文の詳細情報
            </DialogDescription>
          </DialogHeader>
          
          {selectedItem && (
            <div className="space-y-6">
              {/* 入力チャット履歴 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">入力チャット履歴</h3>
                  <span className="text-xs text-muted-foreground">
                    {selectedItem.inputChatHistory.length.toLocaleString()} 文字
                  </span>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 max-h-60 overflow-y-auto">
                  <pre className="text-sm whitespace-pre-wrap font-mono">
                    {selectedItem.inputChatHistory}
                  </pre>
                </div>
              </div>

              {/* 生成された鑑定文 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">生成された鑑定文</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {selectedItem.generatedDivinationText.length.toLocaleString()} 文字
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy(selectedItem.generatedDivinationText)}
                      className="gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" />
                          コピー済み
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          コピー
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                    {selectedItem.generatedDivinationText}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
