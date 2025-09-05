import { ChevronLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const dramas = [
  {
    title: "コード・ブルー",
    image: "https://thvnext.bing.com/th/id/OIP.GjynNcTBL0aaszi_s-3LVwHaEK?w=309&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "やまとなでしこ",
    image: "https://cdn.image.st-hatena.com/image/scale/16a761768d4060f3dcbc951b0e1b5cf47ddb4fcf/backend=imagemagick;version=1;width=1300/https%3A%2F%2Fi.fod.fujitv.co.jp%2Fimf%2Fsynth%2Fh%3D480%2Ca%3D0%2Cu%3D1%2Cl%3D%28h%3D480%2Ca%3D0%2Cu%3D0%252Fimg%252Fprogram%252F00tk%252F00tk_a.jpg%29%2Cq%3D95%2Cf%3Dwebp%3Aauto%2Fimg%2Fetc%2F0000_still_blur.jpg",
  },
  {
    title: "Beautiful Life",
    image: "https://thvnext.bing.com/th/id/OIP.g9-jOBr9GYCJnsAa_yi1bQHaEJ?w=330&h=185&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "ごくせん",
    image: "https://images.prod.hjholdings.tv/d3urerHm/uploads/4e831564-33b7-499f-86cf-1ebc59f8b102.jpg?w=1600&h=600&p=t"
  },
  {
    title: "花より男子",
    image: "https://thvnext.bing.com/th/id/OIP.S2ABQo6PwTptWBKrV6ySaAHaEK?w=281&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Dr.コトー診療所",
    image: "https://thvnext.bing.com/th/id/OIP.x8_rTo6CWpjjaH12WPInFQHaEE?w=298&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "まだ結婚できない男",
    image: "https://i.fod.fujitv.co.jp/pc/image/ep/4l21/wbhjfr_4l21_cxbg_001_wm.jpg",
  },
  {
    title: "JIN-仁-",
    image: "https://thvnext.bing.com/th/id/OIP.VURr7fOQ-L3jut7X03grXgHaEK?w=302&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
  },
]

export default function DramaListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile frame simulation */}
      <div className="mx-auto max-w-sm bg-white min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button size="icon" className="h-10 w-10 bg-green-500 hover:bg-green-600 rounded-full">
            <ArrowRight className="h-5 w-5 text-white" />
          </Button>
        </div>

        {/* Title */}
        <div className="px-4 pb-6">
          <h1 className="text-lg font-medium text-gray-900">2000年代に流行ったドラマ</h1>
        </div>

        {/* Drama Grid */}
        <div className="px-4 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {dramas.map((drama, index) => (
              <div key={index} className="space-y-2 cursor-pointer group transition-transform hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-offset-2 transition-all">
                  <img
                    src={drama.image || "/placeholder.svg"}
                    alt={drama.title}
                    className="h-full w-full object-cover group-hover:brightness-110 transition-all"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                  {drama.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
