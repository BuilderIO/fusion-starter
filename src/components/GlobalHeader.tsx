import { Search, HelpCircle, MessageSquare, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Grid Dots SVG component to match Figma design exactly
const GridDotsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 14.5C9.82843 14.5 10.5 15.1716 10.5 16C10.5 16.8284 9.82843 17.5 9 17.5C8.17157 17.5 7.5 16.8284 7.5 16C7.5 15.1716 8.17157 14.5 9 14.5ZM16 14.5C16.8284 14.5 17.5 15.1716 17.5 16C17.5 16.8284 16.8284 17.5 16 17.5C15.1716 17.5 14.5 16.8284 14.5 16C14.5 15.1716 15.1716 14.5 16 14.5ZM2 14.5C2.82843 14.5 3.5 15.1716 3.5 16C3.5 16.8284 2.82843 17.5 2 17.5C1.17157 17.5 0.5 16.8284 0.5 16C0.5 15.1716 1.17157 14.5 2 14.5ZM9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5ZM16 7.5C16.8284 7.5 17.5 8.17157 17.5 9C17.5 9.82843 16.8284 10.5 16 10.5C15.1716 10.5 14.5 9.82843 14.5 9C14.5 8.17157 15.1716 7.5 16 7.5ZM2 7.5C2.82843 7.5 3.5 8.17157 3.5 9C3.5 9.82843 2.82843 10.5 2 10.5C1.17157 10.5 0.5 9.82843 0.5 9C0.5 8.17157 1.17157 7.5 2 7.5ZM9 0.5C9.82843 0.5 10.5 1.17157 10.5 2C10.5 2.82843 9.82843 3.5 9 3.5C8.17157 3.5 7.5 2.82843 7.5 2C7.5 1.17157 8.17157 0.5 9 0.5ZM16 0.5C16.8284 0.5 17.5 1.17157 17.5 2C17.5 2.82843 16.8284 3.5 16 3.5C15.1716 3.5 14.5 2.82843 14.5 2C14.5 1.17157 15.1716 0.5 16 0.5ZM2 0.5C2.82843 0.5 3.5 1.17157 3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5Z"
      fill="#242424"
    />
  </svg>
);

// Person Feedback SVG component to match Figma design
const PersonFeedbackIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 10C9.32843 10 10 10.6716 10 11.5V12C10 13.9714 8.14049 16 5 16C1.85951 16 0 13.9714 0 12V11.5C0 10.6716 0.671573 10 1.5 10H8.5ZM8.5 11H1.5C1.22386 11 1 11.2239 1 11.5V12C1 13.4376 2.43216 15 5 15C7.56784 15 9 13.4376 9 12V11.5C9 11.2239 8.77614 11 8.5 11ZM5 3.5C6.51878 3.5 7.75 4.73122 7.75 6.25C7.75 7.76878 6.51878 9 5 9C3.48122 9 2.25 7.76878 2.25 6.25C2.25 4.73122 3.48122 3.5 5 3.5ZM14 0C15.0544 0 15.9182 0.815878 15.9945 1.85074L16 2V4C16 5.05436 15.1841 5.91817 14.1493 5.99451L14 6H12.499L11.301 7.59979C10.7716 8.30599 9.69652 8.01993 9.52431 7.22426L9.50656 7.11264L9.5008 7L9.5 5.935L9.42237 5.91532C8.69696 5.69685 8.14522 5.07753 8.02463 4.3148L8.00549 4.14926L8 4V2C8 0.945638 8.81588 0.0818349 9.85074 0.00548577L10 0H14ZM5 4.5C4.0335 4.5 3.25 5.2835 3.25 6.25C3.25 7.2165 4.0335 8 5 8C5.9665 8 6.75 7.2165 6.75 6.25C6.75 5.2835 5.9665 4.5 5 4.5ZM14 1H10C9.48716 1 9.06449 1.38604 9.00673 1.88338L9 2V4C9 4.51284 9.38604 4.93551 9.88338 4.99327L10 5H10.5008V7L12 5H14C14.5128 5 14.9355 4.61396 14.9933 4.11662L15 4V2C15 1.48716 14.614 1.06449 14.1166 1.00673L14 1Z"
      fill="#242424"
    />
  </svg>
);

// Question SVG component to match Figma design
const QuestionIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 0C1.79386 0 0 1.79386 0 4C0 4.27614 0.223858 4.5 0.5 4.5C0.776142 4.5 1 4.27614 1 4C1 2.34614 2.34614 1 4 1C5.65386 1 7 2.34614 7 4C7 5.2486 6.30782 5.86333 5.4246 6.62037L5.39354 6.64699C4.53276 7.38455 3.5 8.26947 3.5 10V10.5C3.5 10.7761 3.72386 11 4 11C4.27614 11 4.5 10.7761 4.5 10.5V10C4.5 8.7514 5.19218 8.13667 6.0754 7.37963L6.10646 7.35301C6.96724 6.61545 8 5.73053 8 4C8 1.79386 6.20614 0 4 0ZM4 14C4.41421 14 4.75 13.6642 4.75 13.25C4.75 12.8358 4.41421 12.5 4 12.5C3.58579 12.5 3.25 12.8358 3.25 13.25C3.25 13.6642 3.58579 14 4 14Z"
      fill="#242424"
    />
  </svg>
);

// Organization SVG component to match Figma design
const OrganizationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99992 0C6.34271 0 4.99927 1.34344 4.99927 3.00066C4.99927 4.48754 6.08073 5.72183 7.49999 5.95985V7.5H4.5C3.67157 7.5 3 8.17157 3 9V10.0416C1.5811 10.2799 0.5 11.514 0.5 13.0007C0.5 14.6579 1.84344 16.0013 3.50066 16.0013C5.15787 16.0013 6.50131 14.6579 6.50131 13.0007C6.50131 11.5136 5.41954 10.2791 4 10.0414V9C4 8.72386 4.22386 8.5 4.5 8.5H11.5C11.7761 8.5 12 8.72386 12 9V10.0416C10.5811 10.2799 9.5 11.514 9.5 13.0007C9.5 14.6579 10.8434 16.0013 12.5007 16.0013C14.1579 16.0013 15.5013 14.6579 15.5013 13.0007C15.5013 11.5136 14.4195 10.2791 13 10.0414V9C13 8.17157 12.3284 7.5 11.5 7.5H8.49999V5.95983C9.91918 5.72176 11.0006 4.48749 11.0006 3.00066C11.0006 1.34344 9.65714 0 7.99992 0ZM5.99927 3.00066C5.99927 1.89572 6.89499 1 7.99992 1C9.10485 1 10.0006 1.89572 10.0006 3.00066C10.0006 4.10559 9.10485 5.00131 7.99992 5.00131C6.89499 5.00131 5.99927 4.10559 5.99927 3.00066ZM1.5 13.0007C1.5 11.8957 2.39572 11 3.50066 11C4.60559 11 5.50131 11.8957 5.50131 13.0007C5.50131 14.1056 4.60559 15.0013 3.50066 15.0013C2.39572 15.0013 1.5 14.1056 1.5 13.0007ZM12.5007 11C13.6056 11 14.5013 11.8957 14.5013 13.0007C14.5013 14.1056 13.6056 15.0013 12.5007 15.0013C11.3957 15.0013 10.5 14.1056 10.5 13.0007C10.5 11.8957 11.3957 11 12.5007 11Z"
      fill="#242424"
    />
  </svg>
);

export function GlobalHeader() {
  return (
    <div className="flex w-full h-16 items-center justify-between bg-white border-b border-neutral-stroke px-4">
      {/* Left section - App launcher and logo */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="p-1.5 h-12 w-12">
          <GridDotsIcon />
        </Button>

        <div className="flex items-center gap-1">
          <div className="flex items-center justify-center w-6 h-6 bg-contoso-brand rounded text-white text-lg font-extrabold font-raleway">
            C
          </div>
          <span className="text-sm font-extrabold text-neutral-1 uppercase tracking-wide font-raleway">
            Contoso
          </span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-3" />
          <Input
            placeholder="Search"
            className="pl-10 bg-white border border-neutral-stroke rounded-full h-12 text-sm shadow-search"
          />
        </div>
      </div>

      {/* Right section - Actions and profile */}
      <div className="flex items-center gap-0">
        <Button variant="ghost" size="sm" className="p-3.5 h-12 w-12">
          <PersonFeedbackIcon />
        </Button>

        <Button variant="ghost" size="sm" className="p-3.5 h-12 w-12">
          <QuestionIcon />
        </Button>

        <Button variant="ghost" size="sm" className="p-3.5 h-12 w-12">
          <OrganizationIcon />
        </Button>

        {/* User badge */}
        <div className="flex items-center gap-2.5 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-2.5 ml-2.5">
          <div className="flex items-center justify-center w-4 h-4 bg-contoso-brand rounded text-white text-xs font-extrabold font-raleway">
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
