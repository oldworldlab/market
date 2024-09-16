'use client'

import Image from "next/image"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-medieval">
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
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
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
            <h2 className="text-xl font-bold mb-4 text-gold">Filters</h2>
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
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700">
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
              {[...Array(16)].map((_, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gold transition-colors">
                  <Image src="/placeholder.svg" alt="Item" width={100} height={100} className="w-full h-40 object-cover mb-4 rounded" />
                  <h3 className="text-lg font-semibold mb-2">Abyssal Blade</h3>
                  <p className="text-gray-400 mb-2">Rare | Sword</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold font-bold">$299.99</span>
                    <span className="text-green-500">-15%</span>
                  </div>
                  <Button className="w-full mt-2">Buy Now</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}