"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedTrend, setSelectedTrend] = useState<string | null>(null)

  const yearScrollRef = useRef<HTMLDivElement>(null)
  const trendScrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const YEARS = Array.from({ length: 13 }, (_, i) => 1900 + i * 10)
  const trends = ["ドラマ", "CM", "ファッション", "流行語"]

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
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">流行けんさくん</h1>

        {/* 年代選択 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">年代</h2>
          <div
            ref={yearScrollRef}
            className="overflow-x-auto scroll-smooth"
            style={{ scrollSnapType: "x mandatory", padding: "0 40%" }}
          >
            <div className="flex gap-4 w-max">
              {YEARS.map((year) => (
                <div
                  key={year}
                  className={`w-32 h-32 flex items-center justify-center border-2 text-lg font-semibold flex-shrink-0 ${
                    selectedYear === year
                      ? "bg-blue-500 text-white border-blue-700"
                      : "bg-white text-black border-gray-400"
                  }`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 流行選択 */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">流行</h2>
          <div
            ref={trendScrollRef}
            className="overflow-x-auto scroll-smooth"
            style={{ scrollSnapType: "x mandatory", padding: "0 40%" }}
          >
            <div className="flex gap-4 w-max">
              {trends.map((trend) => (
                <div
                  key={trend}
                  className={`w-32 h-32 flex items-center justify-center border-2 text-lg font-semibold flex-shrink-0 ${
                    selectedTrend === trend
                      ? "bg-blue-500 text-white border-blue-700"
                      : "bg-white text-black border-gray-400"
                  }`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  {trend}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ボタン */}
        <div className="flex justify-center">
          {selectedYear && selectedTrend && (
            <button
              onClick={handleNextPage}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
            >
              次のページへ →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
