import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and description */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">My App</h2>
            <p className="text-sm text-slate-600">
              A simple application built with React, Vite, and shadcn/ui
              components.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/todos"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Todo App
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-800">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://vitejs.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Vite
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  shadcn/ui
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-800">Contact</h3>
            <p className="text-sm text-slate-600">
              Have questions or feedback? Get in touch with us.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-slate-600">
            © {currentYear} My App. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
