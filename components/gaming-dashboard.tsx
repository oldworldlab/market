'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users as UsersIcon, MessageSquare, Lock, Clock, User, Activity, Trophy, BarChart, Cloud, FileText, Mic, ShoppingCart } from "lucide-react"

// Page components
const Authentication = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Authentication</h2>
    <div className="grid gap-4">
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Current Session</h3>
        <p>Logged in as: llphg1517</p>
        <p>Session expires in: 2 hours</p>
      </div>
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
        <p>Status: Enabled</p>
        <Button className="mt-2">Manage 2FA</Button>
      </div>
    </div>
  </div>
)

const Sessions = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Active Sessions</h2>
    <ScrollArea className="h-[400px] w-full rounded border border-[#30363d] bg-[#0d1117] p-4">
      {[
        { device: "Windows PC", location: "New York, USA", lastActive: "2 minutes ago" },
        { device: "iPhone 12", location: "Los Angeles, USA", lastActive: "1 hour ago" },
        { device: "MacBook Pro", location: "London, UK", lastActive: "Yesterday" },
      ].map((session, index) => (
        <div key={index} className="flex justify-between items-center mb-4 p-2 bg-[#1c2333] rounded-lg">
          <div>
            <p className="font-semibold">{session.device}</p>
            <p className="text-sm text-gray-400">{session.location}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Last active: {session.lastActive}</p>
            <Button variant="destructive" size="sm" className="mt-2">Terminate</Button>
          </div>
        </div>
      ))}
    </ScrollArea>
  </div>
)

const Friends = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Friends</h2>
    <Input placeholder="Search friends..." />
    <ScrollArea className="h-[400px] w-full rounded border border-[#30363d] bg-[#0d1117] p-4">
      {[
        { name: "GamerPro123", status: "Online", game: "Fortnite" },
        { name: "EpicPlayer", status: "Offline", lastSeen: "2 hours ago" },
        { name: "NoobMaster69", status: "In Game", game: "Apex Legends" },
        { name: "StreamerGirl", status: "Online", game: "Just Chatting" },
      ].map((friend, index) => (
        <div key={index} className="flex justify-between items-center mb-4 p-2 bg-[#1c2333] rounded-lg">
          <div>
            <p className="font-semibold">{friend.name}</p>
            <p className="text-sm text-gray-400">{friend.status}</p>
          </div>
          <div className="flex items-center space-x-2">
            {friend.game && <p className="text-sm text-gray-400">Playing: {friend.game}</p>}
            {friend.lastSeen && <p className="text-sm text-gray-400">Last seen: {friend.lastSeen}</p>}
            <Button size="icon" variant="ghost" className="h-8 w-8 text-[#ffd700]">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </ScrollArea>
  </div>
)

const Presence = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Presence</h2>
    <div className="grid gap-4">
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Your Current Status</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <p>Online</p>
        </div>
        <Input className="mt-2" placeholder="Set a custom status..." />
      </div>
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Current Activity</h3>
        <p>Playing: Fortnite</p>
        <p>Time Elapsed: 2 hours 15 minutes</p>
      </div>
    </div>
  </div>
)

const Parties = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Parties</h2>
    <Button>Create New Party</Button>
    <ScrollArea className="h-[400px] w-full rounded border border-[#30363d] bg-[#0d1117] p-4">
      {[
        { name: "Squad Goals", game: "Fortnite", members: 4, status: "In Game" },
        { name: "Apex Predators", game: "Apex Legends", members: 3, status: "In Lobby" },
        { name: "Warzone Warriors", game: "Call of Duty: Warzone", members: 2, status: "Matchmaking" },
      ].map((party, index) => (
        <div key={index} className="flex justify-between items-center mb-4 p-2 bg-[#1c2333] rounded-lg">
          <div>
            <p className="font-semibold">{party.name}</p>
            <p className="text-sm text-gray-400">{party.game}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">{party.members} members</p>
            <p className="text-sm text-gray-400">{party.status}</p>
          </div>
        </div>
      ))}
    </ScrollArea>
  </div>
)

const UsersComponent = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Users</h2>
    <Input placeholder="Search users..." />
    <ScrollArea className="h-[400px] w-full rounded border border-[#30363d] bg-[#0d1117] p-4">
      {[
        { name: "xXDarkLord420Xx", level: 42, lastSeen: "2 minutes ago" },
        { name: "ProGamer2023", level: 87, lastSeen: "1 hour ago" },
        { name: "NoobSlayer99", level: 13, lastSeen: "3 days ago" },
        { name: "EpicStreamer", level: 65, lastSeen: "Just now" },
      ].map((user, index) => (
        <div key={index} className="flex justify-between items-center mb-4 p-2 bg-[#1c2333] rounded-lg">
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-400">Level {user.level}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Last seen: {user.lastSeen}</p>
            <Button size="sm" className="mt-2">View Profile</Button>
          </div>
        </div>
      ))}
    </ScrollArea>
  </div>
)

const Stats = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Stats</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Fortnite</h3>
        <p>Wins: 150</p>
        <p>K/D Ratio: 2.5</p>
        <p>Matches Played: 1000</p>
      </div>
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Apex Legends</h3>
        <p>Wins: 75</p>
        <p>K/D Ratio: 1.8</p>
        <p>Matches Played: 500</p>
      </div>
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Call of Duty: Warzone</h3>
        <p>Wins: 30</p>
        <p>K/D Ratio: 1.2</p>
        <p>Matches Played: 300</p>
      </div>
      <div className="p-4 bg-[#1c2333] rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Rocket League</h3>
        <p>Wins: 200</p>
        <p>Goals: 1500</p>
        <p>Matches Played: 800</p>
      </div>
    </div>
  </div>
)

const Achievements = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Achievements</h2>
    <ScrollArea className="h-[400px] w-full rounded border border-[#30363d] bg-[#0d1117] p-4">
      {[
        { name: "First Blood", description: "Win your first match", completed: true, game: "Fortnite" },
        { name: "Sharpshooter", description: "Get 100 headshots", completed: false, progress: "72/100", game: "Apex Legends" },
        { name: "Unstoppable", description: "Win 10 matches in a row", completed: true, game: "Rocket League" },
        { name: "Collector", description: "Obtain all legendary items", completed: false, progress: "15/20", game: "Call of Duty: Warzone" },
      ].map((achievement, index) => (
        <div key={index} className="flex justify-between items-center mb-4 p-2 bg-[#1c2333] rounded-lg">
          <div>
            <p className="font-semibold">{achievement.name}</p>
            <p className="text-sm text-gray-400">{achievement.description}</p>
            <p className="text-sm text-gray-400">{achievement.game}</p>
          </div>
          <div className="text-right">
            {achievement.completed ? (
              <span className="text-green-500">Completed</span>
            ) : (
              <span className="text-yellow-500">{achievement.progress}</span>
            )}
          </div>
        </div>
      ))}
    </ScrollArea>
  </div>
)

const Leaderboards = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Leaderboards</h2>
    <Tabs defaultValue="fortnite">
      <TabsList>
        <TabsTrigger value="fortnite">Fortnite</TabsTrigger>
        <TabsTrigger value="apex">Apex Legends</TabsTrigger>
        <TabsTrigger value="warzone">Warzone</TabsTrigger>
      </TabsList>
      <TabsContent value="fortnite">
        <ScrollArea className="h-[400px] w-full rounded border border-[#30363d] bg-[#0d1117] p-4">
          {[
            { rank: 1, name: "Ninja", score: 10000 },
            { rank: 2, name: "Tfue", score: 9500 },
            { rank: 3, name: "Myth", score: 9000 },
            { rank: 4, name: "Bugha", score: 8500 },
            { rank: 5, name: "Clix", score: 8000 },
          ].map((player, index) => (
            <div key={index} className="flex justify-between items-center mb-2 p-2 bg-[#1c2333] rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="font-bold">{player.rank}</span>
                <span>{player.name}</span>
              </div>
              <span>{player.score}</span>
            </div>
          ))}
        </ScrollArea>
      </TabsContent>
      {/* Similar content for Apex Legends and Warzone tabs */}
    </Tabs>
  </div>
)

export default function GamingDashboard() {
  const [activePage, setActivePage] = useState("Authentication")

  const pageComponents = {
    Authentication: <Authentication />,
    Sessions: <Sessions />,
    Friends: <Friends />,
    Presence: <Presence />,
    Parties: <Parties />,
    Users: <UsersComponent />,
    Stats: <Stats />,
    Achievements: <Achievements />,
    Leaderboards: <Leaderboards />,
  }

  const icons = {
    Authentication: <Lock className="w-4 h-4 mr-2" />,
    Sessions: <Clock className="w-4 h-4 mr-2" />,
    Friends: <UsersIcon className="w-4 h-4 mr-2" />,
    Presence: <Activity className="w-4 h-4 mr-2" />,
    Parties: <UsersIcon className="w-4 h-4 mr-2" />,
    Users: <User className="w-4 h-4 mr-2" />,
    Stats: <BarChart className="w-4 h-4 mr-2" />,
    Achievements: <Trophy className="w-4 h-4 mr-2" />,
    Leaderboards: <BarChart className="w-4 h-4 mr-2" />,
    "Auth Attributes": <Lock className="w-4 h-4 mr-2" />,
    "User Cloud": <Cloud className="w-4 h-4 mr-2" />,
    "Title File": <FileText className="w-4 h-4 mr-2" />,
    "Voice Chat": <Mic className="w-4 h-4 mr-2" />,
    "E-commerce": <ShoppingCart className="w-4 h-4 mr-2" />,
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-4">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">User: llphg1517</h1>
              <p className="text-sm text-gray-400">PUID: 0002d00bedd444909f4be0aafb933f04</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Epic ID:</p>
              <p className="text-[#ffd700]">d92c0956d9ed4d9d8dd3b8ac0675b181</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
          <nav className="space-y-2">
            {Object.keys(pageComponents).map((page) => (
              <Button
                key={page}
                variant={activePage === page ? "secondary" : "ghost"}
                className="w-full justify-start text-left hover:bg-[#1c2333] hover:text-[#ffd700]"
                onClick={() => setActivePage(page)}
              >
                {icons[page as keyof typeof icons]}
                {page}
              </Button>
            ))}
          </nav>

          <main className="bg-[#1c2333] border border-[#30363d] rounded-lg p-4">
            {pageComponents[activePage as keyof typeof pageComponents]}
          </main>
        </div>
      </div>
    </div>
  )
}