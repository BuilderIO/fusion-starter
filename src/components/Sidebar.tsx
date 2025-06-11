import {
  Home,
  User,
  CheckCircle,
  AppWindow,
  Lock,
  Users,
  MessageSquare,
  Menu,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  return (
    <div
      className={cn(
        "w-66 bg-white border-r border-neutral-stroke flex flex-col",
        className,
      )}
    >
      {/* Nav header with hamburger and user */}
      <div className="p-2">
        <div className="flex items-center gap-3 p-2 rounded">
          <Button variant="ghost" size="sm" className="p-0.5 bg-gray-100">
            <Menu className="h-5 w-5 text-neutral-2" />
          </Button>
        </div>

        {/* User profile section */}
        <div className="flex items-center gap-2 p-1.5 mt-2">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Carlos Slattery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-1">
              Carlos Slattery
            </span>
            <span className="text-xs text-neutral-1">carlos@contoso.com</span>
          </div>
        </div>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 px-1.5 py-2 space-y-1">
        {/* Home */}
        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
          <Home className="h-5 w-5 text-neutral-1" />
          <span className="text-sm text-neutral-1">Home</span>
        </div>

        {/* Account with dropdown */}
        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
          <User className="h-5 w-5 text-neutral-1" />
          <span className="text-sm text-neutral-1 flex-1">Account</span>
          <ChevronDown className="h-3 w-3 text-neutral-1" />
        </div>

        {/* Action center with dropdown */}
        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
          <CheckCircle className="h-5 w-5 text-neutral-1" />
          <span className="text-sm text-neutral-1 flex-1">Action center</span>
          <ChevronDown className="h-3 w-3 text-neutral-1" />
        </div>

        {/* Launch apps */}
        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
          <AppWindow className="h-5 w-5 text-neutral-1" />
          <span className="text-sm text-neutral-1">Launch apps</span>
        </div>

        {/* Manage access */}
        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
          <Lock className="h-5 w-5 text-neutral-1" />
          <span className="text-sm text-neutral-1">Manage access</span>
        </div>

        {/* Manage people - Active */}
        <div className="flex items-center gap-3 p-2 rounded bg-blue-50 relative">
          <div className="absolute -left-1.5 top-0 bottom-0 w-1 bg-contoso-blue rounded-r"></div>
          <div className="w-5 h-5 bg-contoso-blue rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-sm text-contoso-blue font-semibold">
            Manage people
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-stroke my-3 mx-0"></div>

        {/* Give feedback */}
        <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
          <MessageSquare className="h-4 w-4 text-neutral-1" />
          <span className="text-sm text-neutral-1">Give feedback</span>
        </div>
      </nav>
    </div>
  );
}
