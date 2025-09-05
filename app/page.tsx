"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter}from"next/navigation";
export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedTrend, setSelectedTrend] = useState<string | null>(null)

  const yearScrollRef = useRef<HTMLDivElement>(null)
  const trendScrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const detectCenterItem = (scrollContainer: HTMLDivElement, items: any[], setter: (item: any) => void) => {
    const containerRect = scrollContainer.getBoundingClientRect()
    const centerX = containerRect.left + containerRect.width / 2

    const children = scrollContainer.children[0].children
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

    const years = Array.from({ length: 13 }, (_, i) => 1900 + i * 10)
    const trends = ["ドラマ", "CM", "ファッション", "流行語"]

    const handleYearScroll = () => {
      if (yearContainer) {
        detectCenterItem(yearContainer, years, setSelectedYear)
      }
    }

    const handleTrendScroll = () => {
      if (trendContainer) {
        detectCenterItem(trendContainer, trends, setSelectedTrend)
      }
    }

    if (yearContainer) {
      yearContainer.addEventListener("scroll", handleYearScroll)
      // Set initial selection
      setTimeout(() => handleYearScroll(), 100)
    }

    if (trendContainer) {
      trendContainer.addEventListener("scroll", handleTrendScroll)
      // Set initial selection
      setTimeout(() => handleTrendScroll(), 100)
    }

    return () => {
      if (yearContainer) {
        yearContainer.removeEventListener("scroll", handleYearScroll)
      }
      if (trendContainer) {
        trendContainer.removeEventListener("scroll", handleTrendScroll)
      }
    }
  }, [])

  const handleNextPage = () => {
    if (selectedYear && selectedTrend) {
      console.log("両方選択されました - 次のページへ進みます")
      console.log("選択された年代:", selectedYear)
      console.log("選択された流行:", selectedTrend)
      alert(`選択完了！\n年代: ${selectedYear}\n流行: ${selectedTrend}\n\n次のページに進みます`)
      // ここで実際のページ遷移を実装できます
      // router.push('/next-page') など
      router.push("/list")
    }
  }

  const handleOkClick = () => {
    console.log("選択された年代:", selectedYear)
    console.log("選択された流行:", selectedTrend)
    alert(`選択された年代: ${selectedYear || "未選択"}\n選択された流行: ${selectedTrend || "未選択"}`)
  }

  const trends = ["ドラマ", "CM", "ファッション", "流行語"]

  const bothSelected = selectedYear !== null && selectedTrend !== null

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">流行けんさくん</h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            年代と流行ジャンルを選んで、当時のトレンドを探してみましょう。
          </p>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">年代</h2>
          <div className="relative">
            <div
              ref={yearScrollRef}
              className="overflow-x-auto pb-4 scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                paddingLeft: "calc(50% - 64px)",
                paddingRight: "calc(50% - 64px)",
              }}
            >
              <div className="flex gap-4 w-max">
                {Array.from({ length: 13 }, (_, i) => {
                  const year = 1900 + i * 10
                  return (
                    <div
                      key={i}
                      className={`w-32 h-32 border-2 flex items-center justify-center text-lg font-semibold hover:scale-105 transition-transform duration-200 flex-shrink-0 ${
                        selectedYear === year
                          ? "bg-gray-400 border-gray-600 text-white"
                          : "bg-white border-black text-black"
                      }`}
                      style={{ scrollSnapAlign: "center" }}
                    >
                      {year}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-36 h-36 border-4 border-red-500 bg-transparent flex items-center justify-center"></div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">流行</h2>
          <div className="relative">
            <div
              ref={trendScrollRef}
              className="overflow-x-auto pb-4 scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                paddingLeft: "calc(50% - 64px)",
                paddingRight: "calc(50% - 64px)",
              }}
            >
              <div className="flex gap-4 w-max">
                {trends.map((trend, i) => (
                  <div
                    key={i}
                    className={`w-32 h-32 border-2 flex items-center justify-center text-sm font-semibold hover:scale-105 transition-transform duration-200 flex-shrink-0 ${
                      selectedTrend === trend
                        ? "bg-gray-400 border-gray-600 text-white"
                        : "bg-white border-black text-black"
                    }`}
                    style={{ scrollSnapAlign: "center" }}
                  >
                    {trend}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-36 h-36 border-4 border-red-500 bg-transparent flex items-center justify-center"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={handleOkClick}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg transition-colors duration-200"
          >
            OK
          </button>
          {bothSelected && (
            <button
              onClick={handleNextPage}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-lg transition-colors duration-200 animate-pulse"
            >
              次のページへ →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
