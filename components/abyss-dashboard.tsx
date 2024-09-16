'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, RefreshCcw, LogOut, UserMinus } from "lucide-react"

export function AbyssDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 font-medieval">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#d4af37]">Adventurer: llphg1517</h1>
              <p className="text-sm text-gray-400">Soul ID: 0002d00bedd444909f4be0aafb933f04</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Ethereal Sigil:</p>
              <p className="text-teal-300">d92c0956d9ed4d9d8dd3b8ac0675b181</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_250px] gap-4">
          <nav className="space-y-2">
            {[
              "Realms", "Covenant", "Chronicles", "Allies", "Presence", "Factions", "Souls", "Attributes",
              "Feats", "Legends", "Arcane Bindings", "Soul Vault", "Grimoire", "Whispers", "Bazaar"
            ].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start text-left hover:bg-gray-800 hover:text-[#d4af37] btn-abyss"
              >
                {item}
              </Button>
            ))}
          </nav>

          <main className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <Tabs defaultValue="factions" className="space-y-4">
              <div className="flex justify-between items-center">
                <TabsList className="bg-gray-900">
                  <TabsTrigger value="factions" className="data-[state=active]:bg-gray-700 data-[state=active]:text-[#d4af37]">Current Factions</TabsTrigger>
                  <TabsTrigger value="summons" className="data-[state=active]:bg-gray-700 data-[state=active]:text-[#d4af37]">Summons</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm" className="text-[#d4af37] border-[#d4af37] btn-abyss">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Refresh Factions
                </Button>
              </div>

              <TabsContent value="factions" className="space-y-4">
                <Button className="w-full justify-start bg-gray-700 hover:bg-gray-600 text-left btn-abyss">
                  Forge New Alliance
                </Button>
                <ScrollArea className="h-[300px] w-full rounded border border-gray-700 bg-gray-900">
                  {/* Faction list would go here */}
                </ScrollArea>
              </TabsContent>

              <TabsContent value="summons" className="space-y-4">
                <p className="text-sm text-gray-400">Heed the call of your allies. Click a summons to answer.</p>
                <ScrollArea className="h-[300px] w-full rounded border border-gray-700 bg-gray-900">
                  {/* Summons list would go here */}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </main>

          <aside className="space-y-4">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold flex items-center text-[#d4af37]">
                  <Users className="w-5 h-5 mr-2" />
                  Faction Members
                </h2>
                <Button variant="outline" size="sm" className="text-[#d4af37] border-[#d4af37] btn-abyss">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
              <ScrollArea className="h-[200px] w-full rounded">
                {/* Faction members list would go here */}
              </ScrollArea>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 text-[#d4af37]">Actions:</h2>
              <div className="space-y-2">
                <Button variant="destructive" className="w-full justify-start btn-abyss bg-red-900 hover:bg-red-800">
                  <LogOut className="w-4 h-4 mr-2" />
                  Abandon Faction
                </Button>
                <Button variant="destructive" className="w-full justify-start btn-abyss bg-red-900 hover:bg-red-800">
                  <UserMinus className="w-4 h-4 mr-2" />
                  Exile Member
                </Button>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#d4af37]">Allies:</h2>
                <Button variant="outline" size="sm" className="text-[#d4af37] border-[#d4af37] btn-abyss">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
              <ScrollArea className="h-[200px] w-full rounded">
                {/* Allies list would go here */}
              </ScrollArea>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}