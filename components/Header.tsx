import { Search, ShoppingCart, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="border-b border-gray-800 p-4 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black font-bold text-xl">F</span>
          </div>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search fragrances..."
              className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 shadow-lg"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0 shadow-lg">
              0
            </Badge>
          </div>
          <Avatar className="w-8 h-8 shadow-lg">
            <AvatarImage />
            <AvatarFallback className="bg-gray-700">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
