import Image from "next/image"
import Link from "next/link"
import { Diamond, ShoppingBag, Hammer, Scroll, Swords, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 flex flex-col" style={{backgroundImage: "url('/images/background.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
      <header className="bg-[#1c2333] border-b border-[#30363d]">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/secret-shop-logo.png" 
                alt="Secret Shop Logo" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-[#d4af37]">Secret Shop</span>
            </Link>
            <div className="flex space-x-6">
              {[
                { icon: Diamond, label: "Home", href: "/" },
                { icon: ShoppingBag, label: "Marketplace", href: "/marketplace" },
                { icon: Hammer, label: "Gather", href: "#" },
                { icon: Scroll, label: "Crafting", href: "#" },
                { icon: Swords, label: "Relics", href: "#" },
                { icon: Scroll, label: "Quests", href: "#" },
                { icon: User, label: "Profile", href: "/profile" },
              ].map(({ icon: Icon, label, href }) => (
                <Link key={label} href={href} className="flex items-center text-sm text-gray-300 hover:text-white">
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Button className="bg-[#ffd700] text-black hover:bg-[#ffed4a]">Connect Wallet</Button>
        </nav>
      </header>

      {children}

      <footer className="bg-[#1c2333] border-t border-[#30363d] py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2023 Secret Shop. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}