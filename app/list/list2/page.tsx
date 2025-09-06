import Link from "next/link"
import { ArrowLeft, ArrowLeft as ArrowLeftGreen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function DramaInfoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button asChild variant="ghost" size="icon" className="text-foreground">
         {/* 一覧に戻る　例: /dramas */}
         <Link href="/dramas" aria-label="一覧に戻る">
         <ArrowLeft className="h-6 w-6" />
         </Link>
        </Button>

        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <ArrowLeftGreen className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Drama Image →　クリックで概要(#overview)へスクロール */}
        <div className="relative">
          <div className="relative w-full h-80 overflow-hidden">
            <Link
              href="#overview"
              aria-label="概要へ移動"
              className="group relative block"
              >
              <div className="relative w-full h-80 overflow-hidden rounded-none">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S__21078061.jpg-FYKQq7CY1A1sTh9lH2GVdFQgdado0M.jpeg"
              alt="やまとなでしこ ドラマシーン"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow group-hover:translate-y-[-1px] transition">
            詳細を見る
            </span>
          </div>
         </Link>
        </div>
        </div>

        {/* Drama Title Section */}
        <div className="px-4 space-y-2">
          <p className="text-muted-foreground text-sm">2006年ドラマ：</p>
          <h1 className="text-2xl font-bold text-foreground">やまとなでしこ</h1>
        </div>

        {/* Overview Section */}
        <div id="overview" className="px-4 space-y-4 scroll-mt-24">
          <h2 className="text-lg font-semibold text-foreground">概要</h2>
          <div className="text-sm text-foreground leading-relaxed space-y-3">
            <p>
              素敵な王子様を見つければ、幸せなお姫様になれると信じる客室乗務員の女性と、彼女に恋をし、振り回される貧乏な男性を通して、男女の出会いの不思議を描くロマンスコメディ。コメディの基本である「本質の取り違え」を押さえながら夢を見ずにいられない女性の孤独を演じた松嶋菜々子の代表作。また、脚本家である中園ミホの代表作でもある。
            </p>
            <p>
              視聴率は月9では3年ぶりに30%を突破し、同枠では久々のヒット作となった。本作は恋愛ドラマとしては2023年現在、同枠の中での最後の30%達成ドラマである。また、2000年以降に放送されたフジテレビのすべてのドラマの中で、歴代2位の視聴率である。
            </p>
            <p>
              主題歌であるMISIAの「Everything」は、シングルチャート3週連続1位を獲得し、200万枚のミリオンセラーを記録。また、2000年代の女性アーティストのシングルとして最大の売上を記録し、自身最大のヒット曲になった。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}