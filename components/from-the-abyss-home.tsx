'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FromTheAbyssHomeComponent() {
  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Secret Shop</h1>
        <p className="text-xl text-gray-400 mb-6">Uncover legendary items in our mystical marketplace.</p>
        <Button className="bg-[#ffd700] text-black hover:bg-[#ffed4a]">Begin Your Quest</Button>
      </div>

      <h2 className="text-2xl font-bold mb-6">Explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[ 
          {
            title: "Gather",
            description: "Collect rare resources",
          },
          {
            title: "Crafting",
            description: "Create powerful items",
          },
          {
            title: "Relics",
            description: "Discover ancient artifacts",
          },
          {
            title: "Quests",
            description: "Embark on epic adventures",
          },
        ].map((card) => (
          <div key={card.title} className="bg-[#1c2333] border border-[#30363d] rounded-lg overflow-hidden">
            <Image 
              src={`https://placehold.co/600x400?text=${card.title}`} 
              alt={card.title} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 mb-4">{card.description}</p>
              <Button className="w-full bg-transparent border border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black">
                Explore {card.title}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}