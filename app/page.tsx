"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Jacques_Francois } from 'next/font/google'
import { Meddon } from 'next/font/google'
import { Jacques_Francois_Shadow } from 'next/font/google';

const meddon = Meddon({
  subsets: ['latin'],
  weight: '400',
})

const jacquesShadow = Jacques_Francois_Shadow({
  subsets: ['latin'],
  weight: '400',
});

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

// フォントの読み込みと設定
const jacques = Jacques_Francois({
  subsets: ['latin'],
  weight: '400',
})

export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedTrend, setSelectedTrend] = useState<string | null>(null)

  const yearScrollRef = useRef<HTMLDivElement>(null)
  const trendScrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const YEARS = Array.from({ length: 6 }, (_, i) => 1970 + i * 10)
  const trends = ["Drama", "CM", "Fashion", "Buzzword"]

  const detectCenterItem = (
    scrollContainer: HTMLDivElement,
    items: any[],
    setter: (item: any) => void
  ) => {
    const containerRect = scrollContainer.getBoundingClientRect()
    const centerX = containerRect.left + containerRect.width / 2
    const children = scrollContainer.children[0]?.children || []

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement
      const childRect = child.getBoundingClientRect()
      if (childRect.left <= centerX && childRect.right >= centerX) {
        setter(items[i])
        break
      }
    }
  }

  useEffect(() => {
    const yearContainer = yearScrollRef.current
    const trendContainer = trendScrollRef.current

    const handleYearScroll = () => {
      if (yearContainer) detectCenterItem(yearContainer, YEARS, setSelectedYear)
    }
    const handleTrendScroll = () => {
      if (trendContainer) detectCenterItem(trendContainer, trends, setSelectedTrend)
    }

    if (yearContainer) {
      yearContainer.addEventListener("scroll", handleYearScroll)
      setTimeout(() => handleYearScroll(), 100)
    }
    if (trendContainer) {
      trendContainer.addEventListener("scroll", handleTrendScroll)
      setTimeout(() => handleTrendScroll(), 100)
    }

    return () => {
      yearContainer?.removeEventListener("scroll", handleYearScroll)
      trendContainer?.removeEventListener("scroll", handleTrendScroll)
    }
  }, [])

  const handleNextPage = () => {
    if (selectedYear && selectedTrend) {
      router.push(`/list?year=${selectedYear}&trend=${selectedTrend}`)
    }
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/2fafc3e9d97902145565992126cc4c61.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 背景オーバーレイ（白で薄く） */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* コンテンツ */}
      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        <h1 className={`text-8xl md:text-8xl text-center leading-snug ${jacquesShadow.className}`}
        style={{ marginBottom: "10rem" }} // ここで間隔を広く指定
      >
          <div className="inline-block bg-white/30 px-8 py-4">Rewind</div>
          <div className="inline-block bg-white/30 px-8 py-4 -mt-8">the clock</div>
        </h1>

      <p className={`text-4xl md:text-5xl text-center leading-relaxed mb-8 ${playfair.className}`}>
        <span className="inline-block bg-white/30 px-2 py-1">
         時の針を少しだけ、巻き戻しませんか。
        </span>
        <br />
        <span className="inline-block bg-white/30 px-2 py-1">
         忘れ去られた時代の喧騒、一世を風靡した流行の輝き。
        </span>
        <br />
        <span className="inline-block bg-white/30 px-2 py-1">
         指先ひとつで、記憶の旅へ。
        </span>
      </p>


        {/* 年代選択 */}
        <div className="mb-12 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${meddon.className}`}
              style={{ marginTop: "10rem" }} // ← ここで間隔を広くする
          >
            <span className="inline-block bg-white/30 px-3 py-1">
              Decades Ago
            </span>
          </h2>

          <div
            ref={yearScrollRef}
            className="overflow-x-auto overflow-y-hidden scroll-smooth"
            style={{ scrollSnapType: "x mandatory", padding: "0 40%" }}
          >
            <div className="flex gap-6 w-max">
              {YEARS.map((year) => (
            <div
              key={year}
              className={`w-32 h-32 flex items-center justify-center border-2 text-2xl font-semibold flex-shrink-0 transform transition-transform duration-300 ${meddon.className} ${
                selectedYear === year
                  ? "bg-stone-900 text-white border-stone-950 scale-120"
                  : "bg-stone-950 text-amber-100 border-stone-800"
              }`}
              style={{
                scrollSnapAlign: "center",
                width: "8rem",
                height: "8rem",
                minWidth: "8rem",
                minHeight: "8rem",
              }}
          >
             {year}s
            </div>
              ))}
            </div>
          </div>
        </div>

        {/* 流行選択 */}
        <div className="mb-12 text-center">
            <h2 className={`text-4xl font-bold mb-4 ${meddon.className}`}
                style={{ marginTop: "10rem" }} // ← ここで間隔を広くする
            >
              <span className="inline-block bg-white/30 px-3 py-1">
                Categories
              </span>
            </h2>
          <div
            ref={trendScrollRef}
            className="overflow-x-auto overflow-y-hidden scroll-smooth"
            style={{ scrollSnapType: "x mandatory", padding: "0 40%" }}
          >
            <div className="flex gap-6 w-max">
              {trends.map((trend) => (
                <div
                  key={trend}
                  className={`w-32 h-32 flex items-center justify-center border-2 text-lg font-semibold flex-shrink-0 transform transition-transform duration-300 ${meddon.className} ${
                    selectedTrend === trend
                      ? "bg-stone-900 text-white border-stone-950 scale-120"
                      : "bg-stone-950 text-amber-100 border-stone-800"
                  }`}
                  style={{
                    scrollSnapAlign: "center",
                    width: "8rem",
                    height: "8rem",
                    minWidth: "8rem",
                    minHeight: "8rem",
                  }}
                >
                  {trend}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ボタン */}
        <div className="flex justify-center" style={{ marginTop: "10rem" }}>
          {selectedYear && selectedTrend && (
            <button
              onClick={handleNextPage}
              className={`px-12 py-6 text-3xl bg-white text-black font-bold rounded-full border-2 border-black hover:bg-gray-200 transition-colors ${jacquesShadow.className}`}
            >
              rewind
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
