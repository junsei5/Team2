"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"

const data: Record<string, { title: string; image: string }[]> = {
  "ドラマ": [
    { title: "コード・ブルー", image: "https://thvnext.bing.com/th/id/OIP.GjynNcTBL0aaszi_s-3LVwHaEK?w=309&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1" },
    { title: "やまとなでしこ", image: "https://cdn.image.st-hatena.com/image/scale/16a761768d4060f3dcbc951b0e1b5cf47ddb4fcf/backend=imagemagick;version=1;width=1300/https%3A%2F%2Fi.fod.fujitv.co.jp%2Fimf%2Fsynth%2Fh%3D480%2Ca%3D0%2Cu%3D1%2Cl%3D%28h%3D480%2Ca%3D0%2Cu%3D0%252Fimg%252Fprogram%252F00tk%252F00tk_a.jpg%29%2Cq%3D95%2Cf%3Dwebp%3Aauto%2Fimg%2Fetc%2F0000_still_blur.jpg" },
    { title: "Beautiful Life", image: "https://thvnext.bing.com/th/id/OIP.g9-jOBr9GYCJnsAa_yi1bQHaEJ?w=330&h=185&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1" },
    { title: "ごくせん", image: "https://images.prod.hjholdings.tv/d3urerHm/uploads/4e831564-33b7-499f-86cf-1ebc59f8b102.jpg?w=1600&h=600&p=t" },
    { title: "花より男子", image: "https://thvnext.bing.com/th/id/OIP.S2ABQo6PwTptWBKrV6ySaAHaEK?w=281&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1" },
    { title: "Dr.コトー診療所", image: "https://thvnext.bing.com/th/id/OIP.x8_rTo6CWpjjaH12WPInFQHaEE?w=298&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1" },
    { title: "まだ結婚できない男", image: "https://i.fod.fujitv.co.jp/pc/image/ep/4l21/wbhjfr_4l21_cxbg_001_wm.jpg" },
    { title: "JIN-仁-", image: "https://thvnext.bing.com/th/id/OIP.VURr7fOQ-L3jut7X03grXgHaEK?w=302&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1" },
  ],
  "流行語": [
    { title: "最高で金　最低でも金", image: "https://cdn.mainichi.jp/vol1/2016/01/21/20160121hpj00m050202000q/91.jpg" },
    { title: "IT革命", image: "https://th.bing.com/th/id/R.0a61fa778788a651cd3e2b59efeef2fa?rik=L%2b%2fAkzgGmdI9Rg&riu=http%3a%2f%2fwww.asahicom.jp%2fspecial%2fsengo%2fvisual%2fimages%2fvol3%2fpopular%2fit02.jpg&ehk=cyIMhzVQK6c1VF8Y%2bNIu56Z4kZfiVYiWn8Ilm6XY71o%3d&risl=&pid=ImgRaw&r=0" },
    { title: "なんでだろ～", image: "https://wanibooks.ismcdn.jp/mwimgs/7/4/750m/img_74155b0fc98b5ca25ab563e7732bcbc8482668.jpg" },
    { title: "イナバウアー", image: "https://www.sponichi.co.jp/sports/news/2019/12/05/jpeg/20191205s00079000032000p_view.jpg" },
  ],
  "CM": [
    { title: "世田谷自然食品 グルコサミン", image: "https://img.youtube.com/vi/zovyCM1571Y/hqdefault.jpg" },
    { title: "P&G 置き型ファブリーズ", image: "https://img.youtube.com/vi/K0tUUQzkgEE/hqdefault.jpg" },
    { title: "Fit's(ロッテ)", image: "https://img.youtube.com/vi/Sw2QOxnanzs/hqdefault.jpg" },
    { title: "Qoo(コカ・コーラ)", image: "https://img.youtube.com/vi/fC5ceUH0CIk/hqdefault.jpg" },
  ],
  "ファッション": [
    { title: "ローライズデニム", image: "https://th.bing.com/th/id/OIP.hlmPyum5_4-R3Fgxo_v77wHaJN?w=200&h=312&c=10&o=6&pid=genserp&rm=2&ucfimg=1" },
    { title: "キャスケット", image: "https://otokomaeken.com/wp-content/uploads/2022/08/fwwh002-2016.jpg" },
    { title: "カラータイツ", image: "https://thumbnail.image.rakuten.co.jp/@0_mall/petitcaprice/cabinet/petit01/rs-fas-386-02.jpg" },
    { title: "ロリータファッション", image: "https://tokyo-lolita-plus.blog/wp-content/uploads/2019/06/e383ade383aae383bce382bf.jpg" },
  ],
}

export default function ListPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const year = searchParams.get("year") || "2000"
  const trend = searchParams.get("trend") || "ドラマ"
  const items = data[trend] || []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-sm bg-white min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="h-10 w-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        {/* Title */}
        <div className="px-4 pb-6">
          <h1 className="text-lg font-medium">
            {year}年代に流行った{trend}
          </h1>
        </div>

        {/* Grid */}
        <div className="px-4 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="space-y-2 cursor-pointer group hover:scale-105 transition-transform"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-offset-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:brightness-110"
                  />
                </div>
                <h3 className="text-sm font-medium text-center group-hover:text-blue-600">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
