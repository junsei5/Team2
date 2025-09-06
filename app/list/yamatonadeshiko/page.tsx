import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function YamatonadeshikoPage() {
  return (
    <div
      className="min-h-screen flex justify-center items-start bg-gray-100"
      style={{
        backgroundImage: "url('/2fafc3e9d97902145565992126cc4c61.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 画面中央にコンテンツを置く */}
        <div className="w-full max-w-sm mx-auto bg-white/90 rounded-lg shadow-md p-4 space-y-6">
          {/* Header（矢印削除済み） */}
          <div className="p-2 border-b" />

          {/* Main Content */}
            {/* Drama Image */}
            <div className="space-y-2">
              <div className="relative w-full h-48  overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S__21078061.jpg-FYKQq7CY1A1sTh9lH2GVdFQgdado0M.jpeg"
                    alt="やまとなでしこ ドラマシーン"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  /></div>
                  <div>
                    <p className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow group-hover:translate-y-[-1px] transition" />
                </div>
              </div>

            {/* Title */}
             <div> <p className="text-muted-foreground text-sm">2006年ドラマ：</p>
              <h1 className="text-2xl font-bold text-foreground">やまとなでしこ</h1>
            </div>

            {/* Overview */}
            <div id="overview" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg font-semibold text-foreground">概要</h2>
              <div className="text-sm text-foreground leading-relaxed space-y-3">
                <p> 素敵な王子様を見つければ、幸せなお姫様になれると信じる客室乗務員の女性と、彼女に恋をし、振り回される貧乏な男性を通して、男女の出会いの不思議を描くロマンスコメディ。コメディの基本である「本質の取り違え」を押さえながら夢を見ずにいられない女性の孤独を演じた松嶋菜々子の代表作。また、脚本家である中園ミホの代表作でもある。 
                  </p>
                   <p> 視聴率は月9では3年ぶりに30%を突破し、同枠では久々のヒット作となった。本作は恋愛ドラマとしては2023年現在、同枠の中での最後の30%達成ドラマである。また、2000年以降に放送されたフジテレビのすべてのドラマの中で、歴代2位の視聴率である。 
                    </p>
                     <p> 主題歌であるMISIAの「Everything」は、シングルチャート3週連続1位を獲得し、200万枚のミリオンセラーを記録。また、2000年代の女性アーティストのシングルとして最大の売上を記録し、自身最大のヒット曲になった。
                       </p>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8 flex">
              <Link
                href="/list"
                className="group inline-flex items-center gap-2 px-2 py-1"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                <span className="font-script text-2xl">Back</span>
              </Link>
            </div>
            </div>
        </div>
  )
}
