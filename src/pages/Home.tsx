import { HomeText } from '../components/HomeText'
import { HomeActions } from '../components/HomeActions'
import { HomeImage } from '../components/HomeImage'
import { ButtomGraphic } from '../components/ButtomGraphic'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-between p-6 bg-gray-100 gap-6">
      
      
      <div className="flex flex-col gap-6 max-w-lg ml-20">
        <HomeText />
        <HomeActions />
        <ButtomGraphic />
      </div>

      
      <HomeImage />
    </div>
  )
}
