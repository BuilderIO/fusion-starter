import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Home, Settings, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SignInModal } from "@/components/SignInModal";
import { Hero } from "@/components/Hero";

const Index = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-5 w-5 text-slate-800" />
            <span className="text-xl font-semibold text-slate-800">
              My Application
            </span>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link to="/">Dashboard</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-slate-300 to-slate-100 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Main Features
                          </div>
                          <p className="text-sm leading-tight text-slate-600">
                            Discover all the powerful features our application
                            offers.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">
                            Analytics
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                            Track and analyze your performance metrics
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">
                            Reporting
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                            Generate detailed reports and export data
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link to="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsSignInModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign In
            </Button>
            <SignInModal
              open={isSignInModalOpen}
              onOpenChange={setIsSignInModalOpen}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-xl shadow-sm">
          <h1 className="text-5xl font-bold text-slate-800">Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
