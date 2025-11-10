import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, History, Database, Zap, Brain, Shield } from "lucide-react";
import { APP_TITLE, getLoginUrl } from "@/const";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">{APP_TITLE}</h1>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  {user.name || user.email}
                </span>
                <Button variant="outline" size="sm" onClick={() => logout()}>
                  ログアウト
                </Button>
              </>
            ) : (
              <Button asChild size="sm">
                <a href={getLoginUrl()}>ログイン</a>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container py-24 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                AI鑑定文生成
              </span>
              <br />
              <span className="text-foreground">深層鑑定【破】</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Claude Sonnet 4.5と80件の学習データを活用し、
              顧客一人ひとりに寄り添った深層鑑定文を自動生成します
            </p>
            <div className="flex gap-4 justify-center pt-4">
              {user ? (
                <>
                  <Button asChild size="lg" className="gap-2">
                    <a href="/generate">
                      <Sparkles className="w-5 h-5" />
                      鑑定文を生成
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href="/history">
                      <History className="w-5 h-5" />
                      生成履歴
                    </a>
                  </Button>
                </>
              ) : (
                <Button asChild size="lg" className="gap-2">
                  <a href={getLoginUrl()}>
                    <Sparkles className="w-5 h-5" />
                    今すぐ始める
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">3つの特徴</h2>
            <p className="text-muted-foreground text-lg">
              最先端のAI技術と豊富な学習データで、高品質な鑑定文を実現
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Claude Sonnet 4.5</CardTitle>
                <CardDescription>
                  最先端の大規模言語モデルを活用し、自然で説得力のある鑑定文を生成
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle>80件の学習データ</CardTitle>
                <CardDescription>
                  実際の顧客とのチャット履歴と鑑定文のペアから学習し、高精度な生成を実現
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>即座に生成</CardTitle>
                <CardDescription>
                  チャット履歴を入力するだけで、数秒で4,500〜5,000字の深層鑑定文を生成
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 使い方セクション */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">使い方</h2>
            <p className="text-muted-foreground text-lg">
              シンプルな3ステップで高品質な鑑定文を生成
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <CardTitle className="mb-2">チャット履歴を入力</CardTitle>
                    <CardDescription>
                      顧客とのLINEチャット履歴をそのままコピー&ペーストします
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <CardTitle className="mb-2">生成ボタンをクリック</CardTitle>
                    <CardDescription>
                      AIが80件の学習データを参考に、最適な鑑定文を自動生成します
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <CardTitle className="mb-2">鑑定文をコピー</CardTitle>
                    <CardDescription>
                      生成された鑑定文を確認し、必要に応じて微調整してご利用ください
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
        <div className="container">
          <Card className="border-2 max-w-3xl mx-auto text-center">
            <CardHeader className="space-y-4 pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl">
                今すぐ始めましょう
              </CardTitle>
              <CardDescription className="text-lg">
                AIの力で、より多くの顧客に深い鑑定を届けることができます
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              {user ? (
                <Button asChild size="lg" className="gap-2">
                  <a href="/generate">
                    <Sparkles className="w-5 h-5" />
                    鑑定文を生成する
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" className="gap-2">
                  <a href={getLoginUrl()}>
                    <Sparkles className="w-5 h-5" />
                    ログインして始める
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-8 bg-card/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 {APP_TITLE}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
