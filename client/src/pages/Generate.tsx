import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Loader2, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getLoginUrl } from "@/const";

export default function Generate() {
  const { user, loading: authLoading } = useAuth();
  const [chatHistory, setChatHistory] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [copied, setCopied] = useState(false);
  
  const generateMutation = trpc.divination.generate.useMutation({
    onSuccess: (data) => {
      setGeneratedText(data.divinationText);
      toast.success("鑑定文が生成されました");
    },
    onError: (error) => {
      toast.error(`エラー: ${error.message}`);
    },
  });

  const handleGenerate = () => {
    if (!chatHistory.trim()) {
      toast.error("チャット履歴を入力してください");
      return;
    }
    setGeneratedText("");
    generateMutation.mutate({ chatHistory });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedText);
    setCopied(true);
    toast.success("鑑定文をコピーしました");
    setTimeout(() => setCopied(false), 2000);
  };

  if (authLoading) {
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
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">ログインが必要です</CardTitle>
            <CardDescription>
              鑑定文を生成するにはログインしてください
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
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            深層鑑定文生成
          </h1>
          <p className="text-muted-foreground text-lg">
            顧客とのチャット履歴から、パーソナライズされた鑑定文を自動生成します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 入力エリア */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                  1
                </span>
                チャット履歴を入力
              </CardTitle>
              <CardDescription>
                顧客とのLINEチャット履歴をそのまま貼り付けてください
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="例:&#10;[2024/01/15 14:23] 田中花子: こんにちは、鑑定お願いします&#10;[2024/01/15 14:25] あなた: はじめまして。どのようなことでお悩みですか?&#10;[2024/01/15 14:27] 田中花子: 最近、仕事で..."
                value={chatHistory}
                onChange={(e) => setChatHistory(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
                disabled={generateMutation.isPending}
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {chatHistory.length.toLocaleString()} 文字
                </p>
                <Button
                  onClick={handleGenerate}
                  disabled={generateMutation.isPending || !chatHistory.trim()}
                  className="gap-2"
                >
                  {generateMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      生成中...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      鑑定文を生成
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 出力エリア */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                  2
                </span>
                生成された鑑定文
              </CardTitle>
              <CardDescription>
                Claude Sonnet 4.5が生成した深層鑑定文が表示されます
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generateMutation.isPending ? (
                <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 text-muted-foreground">
                  <Loader2 className="w-12 h-12 animate-spin text-primary" />
                  <div className="text-center space-y-2">
                    <p className="font-medium">鑑定文を生成しています...</p>
                    <p className="text-sm">80件の学習データを参考に、最適な鑑定文を作成中です</p>
                  </div>
                </div>
              ) : generatedText ? (
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-6 min-h-[400px] max-h-[600px] overflow-y-auto">
                    <div className="prose prose-sm max-w-none whitespace-pre-wrap">
                      {generatedText}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {generatedText.length.toLocaleString()} 文字
                    </p>
                    <Button
                      onClick={handleCopy}
                      variant="outline"
                      className="gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          コピー済み
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          コピー
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-2">
                    <Sparkles className="w-12 h-12 mx-auto opacity-50" />
                    <p>チャット履歴を入力して「鑑定文を生成」ボタンを押してください</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
