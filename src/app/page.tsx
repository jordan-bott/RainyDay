import Leaf from '../images/budding-pop-leaf.gif'
import Image from 'next/image'

export default function Home() {
  // Gif from: https://tenor.com/view/budding-pop-leaf-watering-cute-gif-15515997
  return (
    <div className="flex flex-col h-[92vh] w-full place-items-center place-content-center">
      <div className="relative h-140 w-160 bg-lightFG dark:bg-darkFG shadow-blue rounded-lg mb-20 flex flex-col place-items-center place-content-center">
        <h1 className="text-2xl">Welcome to Rainy Day!</h1>
        <Image src={Leaf} alt="rain cloud animation" />
        <h2 className="pt-10">
          Keep track of your watering schedule with ease!
        </h2>
      </div>
    </div>
  )
}
