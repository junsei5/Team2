"use client"

import { Sparkles } from "lucide-react"

export default function TrendSearchApp() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground flex items-center justify-center gap-3">
              <Sparkles className="text-primary" />
              流行けんさくん
              <Sparkles className="text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              流行り廃りを体感しましょう。
              <br />
              年代指定とジャンル指定して、検索ボタンをクリックしてください。
            </p>
          </div>
        </div>
      </header>
    </div>
  )
}
