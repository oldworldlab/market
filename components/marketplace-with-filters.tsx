'use client'

import Image from "next/image"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const items = [
  { name: "Abyssal Blade", rarity: "Rare", type: "Sword", price: 299.99, discount: 15 },
  { name: "Ethereal Armor", rarity: "Epic", type: "Armor", price: 499.99, discount: 10 },
  { name: "Mystic Amulet", rarity: "Legendary", type: "Accessory", price: 999.99, discount: 5 },
  { name: "Shadow Dagger", rarity: "Uncommon", type: "Dagger", price: 149.99, discount: 20 },
  // Add more items as needed
]

export function MarketplaceWithFilters() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-medieval">
      <header className="border-b border-gray-800 p-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-[#d4af37]">From the Abyss</span>
            <Button variant="ghost" className="text-gray-300 hover:text-[#d4af37] hover:bg-gray-800">Market</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-[#d4af37] hover:bg-gray-800">Trade</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-[#d4af37] hover:bg-gray-800">Inventory</Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-gray-900">
              Sign up via Steam
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-[#d4af37]">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>
      <main className="p-6">
        <div className="flex justify-between mb-6">
          <div className="relative w-1/3">
            <Input 
              type="search" 
              placeholder="Search market" 
              className="pl-10 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-gray-100">
              <SelectValue placeholder="Recommended for you" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended for you</SelectItem>
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="high-to-low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex mb-6">
          <div className="w-1/4 pr-6 border-r border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-[#d4af37]">Filters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <Input type="number" placeholder="Min" className="w-1/2 bg-gray-800 border-gray-700" />
                  <Input type="number" placeholder="Max" className="w-1/2 bg-gray-800 border-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Item Condition</h3>
                <div className="space-y-2">
                  {['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred'].map((condition) => (
                    <div key={condition} className="flex items-center">
                      <Checkbox id={condition} className="border-gray-600" />
                      <label htmlFor={condition} className="ml-2 text-sm font-medium text-gray-300">{condition}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Rarity</h3>
                <div className="space-y-2">
                  {['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'].map((rarity) => (
                    <div key={rarity} className="flex items-center">
                      <Checkbox id={rarity} className="border-gray-600" />
                      <label htmlFor={rarity} className="ml-2 text-sm font-medium text-gray-300">{rarity}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Item Type</h3>
                <Select>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-gray-100">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="weapons">Weapons</SelectItem>
                    <SelectItem value="armor">Armor</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="consumables">Consumables</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="w-3/4 pl-6">
            <div className="grid grid-cols-4 gap-4">
              {items.map((item, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-[#d4af37] transition-colors">
                  <Image 
                    src={`/images/item-${i + 1}.jpg`} 
                    alt={item.name} 
                    width={100} 
                    height={100} 
                    className="w-full h-40 object-cover mb-4 rounded" 
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-2">{item.rarity} | {item.type}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#d4af37] font-bold">${item.price.toFixed(2)}</span>
                    <span className="text-green-500">-{item.discount}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-800 p-4 mt-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">&copy; 2023 From the Abyss Online</span>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-gray-500 hover:text-[#d4af37]">
              Help
            </Button>
            <Button variant="ghost" className="text-gray-500 hover:text-[#d4af37]">
              Support
            </Button>
            <Button variant="ghost" className="text-gray-500 hover:text-[#d4af37]">
              Report
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}