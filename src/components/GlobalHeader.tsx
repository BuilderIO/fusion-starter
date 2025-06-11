import { Search, Grid, HelpCircle, MessageSquare, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function GlobalHeader() {
  return (
    <div className="flex w-full h-16 items-center justify-between bg-white border-b border-neutral-stroke px-4">
      {/* Left section - App launcher and logo */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="p-1.5">
          <Grid className="h-5 w-5 text-neutral-1" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 bg-contoso-brand rounded text-white text-xs font-bold">
            C
          </div>
          <span className="text-sm font-bold text-neutral-1 uppercase tracking-wide">
            Contoso
          </span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-3" />
          <Input
            placeholder="Search"
            className="pl-10 bg-white border border-neutral-stroke rounded-full h-12 text-sm"
          />
        </div>
      </div>

      {/* Right section - Actions and profile */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="p-3">
          <MessageSquare className="h-4 w-4 text-neutral-1" />
        </Button>

        <Button variant="ghost" size="sm" className="p-3">
          <HelpCircle className="h-4 w-4 text-neutral-1" />
        </Button>

        <Button variant="ghost" size="sm" className="p-3">
          <Users className="h-4 w-4 text-neutral-1" />
        </Button>

        {/* User badge */}
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 ml-2">
          <div className="flex items-center justify-center w-4 h-4 bg-contoso-brand rounded text-white text-xs font-bold">
            C
          </div>
          <div className="w-7 h-7 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
