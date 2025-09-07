import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function YamatonadeshikoPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-start px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10"
      style={{
        backgroundImage: "url('/2fafc3e9d97902145565992126cc4c61.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 画面中央にコンテンツを置く */}
        <div className="w-full mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-md p-4 sm:p-6 md:p-8 max-w-md md:max-w-4xl lg:max-w-6xl">
          {/* Header（矢印削除済み） */}
          <div className="p-2 mb-4 border-b" />

          <div className="space-y-6">

          {/* Main Content */}
            {/* Drama Image */}
            <div className="space-y-2">
              <div className="relative w-full  overflow-hidden rounded-xl aspect-[16/9] sm:aspect-[4/3] lg:aspect-[21/9]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S__21078061.jpg-FYKQq7CY1A1sTh9lH2GVdFQgdado0M.jpeg"
                    alt="やまとなでしこ ドラマシーン"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover"
                    priority
                  /></div>
                  </div>
                    
            {/* Title */}
             <div> <p className="text-muted-foreground text-sm">2006年ドラマ：</p>
              <h1 className="text-2xl md:text-3xl font-bold ">やまとなでしこ</h1>
            </div>

            {/* Overview */}
            <div id="overview" className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">概要</h2>
              <div className="text-sm text-foreground leading-relaxed space-y-3">
                <p> 素敵な王子様を見つければ、幸せなお姫様になれると信じる客室乗務員の女性と、彼女に恋をし、振り回される貧乏な男性を通して、男女の出会いの不思議を描くロマンスコメディ。コメディの基本である「本質の取り違え」を押さえながら夢を見ずにいられない女性の孤独を演じた松嶋菜々子の代表作。また、脚本家である中園ミホの代表作でもある。 
                  </p>
                   <p> 視聴率は月9では3年ぶりに30%を突破し、同枠では久々のヒット作となった。本作は恋愛ドラマとしては2023年現在、同枠の中での最後の30%達成ドラマである。また、2000年以降に放送されたフジテレビのすべてのドラマの中で、歴代2位の視聴率である。 
                    </p>
                     <p> 主題歌であるMISIAの「Everything」は、シングルチャート3週連続1位を獲得し、200万枚のミリオンセラーを記録。また、2000年代の女性アーティストのシングルとして最大の売上を記録し、自身最大のヒット曲になった。
                       </p>
              </div>

            {/* Back link */}
            <div className="mt-8 flex">
          <Link href="/list" className="inline-block">
            <Image
              src="/2025-09-06_202226-removebg-preview.png"
              alt="Back"
              width={120}   // サイズは必要に応じて変更
              height={50}
              className="cursor-pointer transition-transform hover:-translate-x-1"
            />
          </Link>
            </div>
            </div>
        </div>
       </div>
      </div>
  )
}
