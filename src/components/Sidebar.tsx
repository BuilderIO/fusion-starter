import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

// Navigation/Hamburger Menu SVG component to match Figma design
const NavigationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0.5C0 0.223858 0.223858 0 0.5 0H15.5C15.7761 0 16 0.223858 16 0.5C16 0.776142 15.7761 1 15.5 1H0.5C0.223858 1 0 0.776142 0 0.5ZM0 5.5C0 5.22386 0.223858 5 0.5 5H15.5C15.7761 5 16 5.22386 16 5.5C16 5.77614 15.7761 6 15.5 6H0.5C0.223858 6 0 5.77614 0 5.5ZM0.5 10C0.223858 10 0 10.2239 0 10.5C0 10.7761 0.223858 11 0.5 11H15.5C15.7761 11 16 10.7761 16 10.5C16 10.2239 15.7761 10 15.5 10H0.5Z"
      fill="#424242"
    />
  </svg>
);

// Home SVG component to match Figma design
const HomeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.9975 0.388112C6.56767 -0.124163 7.43233 -0.124162 8.0025 0.388112L13.5025 5.32965C13.8191 5.61414 14 6.01977 14 6.44544V13.4996C14 14.328 13.3284 14.9996 12.5 14.9996H10C9.17157 14.9996 8.5 14.328 8.5 13.4996V9.99957C8.5 9.72343 8.27614 9.49957 8 9.49957H6C5.72386 9.49957 5.5 9.72343 5.5 9.99957V13.4996C5.5 14.328 4.82843 14.9996 4 14.9996H1.5C0.671573 14.9996 0 14.328 0 13.4996V6.44544C0 6.01977 0.180859 5.61414 0.497502 5.32965L5.9975 0.388112ZM7.33417 1.13197C7.14411 0.961217 6.85589 0.961217 6.66583 1.13197L1.16583 6.07351C1.06029 6.16834 1 6.30355 1 6.44544V13.4996C1 13.7757 1.22386 13.9996 1.5 13.9996H4C4.27614 13.9996 4.5 13.7757 4.5 13.4996V9.99957C4.5 9.17114 5.17157 8.49957 6 8.49957H8C8.82843 8.49957 9.5 9.17114 9.5 9.99957V13.4996C9.5 13.7757 9.72386 13.9996 10 13.9996H12.5C12.7761 13.9996 13 13.7757 13 13.4996V6.44544C13 6.30355 12.9397 6.16834 12.8342 6.07351L7.33417 1.13197Z"
      fill="#242424"
    />
  </svg>
);

// Person SVG component to match Figma design
const PersonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z"
      fill="#242424"
    />
  </svg>
);

// Approvals App SVG component to match Figma design
const ApprovalsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.85355 0.146447C7.65829 -0.0488155 7.34171 -0.0488155 7.14645 0.146447C6.95118 0.341709 6.95118 0.658291 7.14645 0.853553L8.29289 2H7.5C3.35786 2 0 5.35786 0 9.5C0 13.6421 3.35786 17 7.5 17C11.6421 17 15 13.6421 15 9.5C15 9.22386 14.7761 9 14.5 9C14.2239 9 14 9.22386 14 9.5C14 13.0899 11.0899 16 7.5 16C3.91015 16 1 13.0899 1 9.5C1 5.91015 3.91015 3 7.5 3H8.29289L7.14645 4.14645C6.95118 4.34171 6.95118 4.65829 7.14645 4.85355C7.34171 5.04882 7.65829 5.04882 7.85355 4.85355L9.85355 2.85355C10.0488 2.65829 10.0488 2.34171 9.85355 2.14645L7.85355 0.146447ZM11.3467 6.13976C11.5457 6.33125 11.5517 6.64778 11.3602 6.84673L7.51027 10.8467C7.41601 10.9447 7.28595 11 7.15002 11C7.0141 11 6.88403 10.9447 6.78978 10.8467L5.13975 9.13235C4.94826 8.93339 4.95431 8.61687 5.15327 8.42537C5.35223 8.23388 5.66876 8.23993 5.86025 8.4389L7.15003 9.77898L10.6398 6.15327C10.8313 5.95431 11.1478 5.94826 11.3467 6.13976Z"
      fill="#242424"
    />
  </svg>
);

// Apps SVG component to match Figma design
const AppsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 14.9999C0.720304 14.9999 0.0795514 14.4051 0.00686669 13.6444L0 13.4999V2.49994C0 1.72024 0.594888 1.07949 1.35554 1.00681L1.5 0.999939H6C6.7797 0.999939 7.42045 1.59483 7.49313 2.35548L7.5 2.49994V2.75437L9.68859 0.485117C10.2276 -0.0740709 11.0959 -0.124381 11.6956 0.347004L11.8118 0.448241L14.5694 3.17289C15.1219 3.71878 15.1614 4.58763 14.68 5.18407L14.5767 5.29955L12.266 7.49937L12.5 7.49994C13.2797 7.49994 13.9204 8.09483 13.9931 8.85548L14 8.99994V13.4999C14 14.2796 13.4051 14.9204 12.6445 14.9931L12.5 14.9999H1.5ZM6.5 8.49994H1V13.4999C1 13.7147 1.13542 13.8979 1.32553 13.9687L1.41012 13.9919L1.5 13.9999H6.5V8.49994ZM12.5 8.49994H7.5V13.9999H12.5C12.7455 13.9999 12.9496 13.8231 12.9919 13.5898L13 13.4999V8.99994C13 8.75448 12.8231 8.55033 12.5899 8.50799L12.5 8.49994ZM7.5 5.70937V7.49937H9.29L7.5 5.70937ZM6 1.99994H1.5C1.25454 1.99994 1.05039 2.17681 1.00806 2.41006L1 2.49994V7.49994H6.5V2.49994C6.5 2.28516 6.36458 2.10201 6.17447 2.03122L6.08988 2.008L6 1.99994ZM11.1222 1.17259C10.9396 0.99646 10.6692 0.981493 10.4768 1.11998L10.4086 1.17909L7.79255 3.89323C7.62705 4.06494 7.60856 4.32495 7.73563 4.51638L7.799 4.59377L10.4147 7.20949C10.5826 7.3774 10.8409 7.40129 11.0345 7.27924L11.1131 7.218L13.8708 4.59133C14.0433 4.41673 14.061 4.14719 13.9248 3.95313L13.8665 3.88423L11.1222 1.17259Z"
      fill="#242424"
    />
  </svg>
);

// Lock Multiple SVG component to match Figma design
const LockIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 1C6.10457 1 7 1.89543 7 3V4H3V3C3 1.89543 3.89543 1 5 1ZM2 3V4H1.5C0.671573 4 0 4.67157 0 5.5V11.5C0 12.3284 0.671573 13 1.5 13H8.5C9.32843 13 10 12.3284 10 11.5V5.5C10 4.67157 9.32843 4 8.5 4H8V3C8 1.34315 6.65685 0 5 0C3.34315 0 2 1.34315 2 3ZM1 5.5C1 5.22386 1.22386 5 1.5 5H8.5C8.77614 5 9 5.22386 9 5.5V11.5C9 11.7761 8.77614 12 8.5 12H1.5C1.22386 12 1 11.7761 1 11.5V5.5ZM3.50058 15C2.84748 15 2.29186 14.5826 2.08594 14H8.50058C9.8813 14 11.0006 12.8807 11.0006 11.5V6.08533C11.5832 6.29125 12.0006 6.84686 12.0006 7.49997V11.5C12.0006 13.433 10.4336 15 8.50058 15H3.50058ZM5 9.5C5.55228 9.5 6 9.05229 6 8.5C6 7.94772 5.55228 7.5 5 7.5C4.44772 7.5 4 7.94772 4 8.5C4 9.05229 4.44772 9.5 5 9.5Z"
      fill="#242424"
    />
  </svg>
);

// Filled Circle SVG component for active Manage people
const FilledCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill="#0060CA"
    />
  </svg>
);

// Person Feedback SVG component to match Figma design
const PersonFeedbackIcon = () => (
  <svg
    width="24"
    height="24"
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
      <div className="px-1.5 py-2">
        <div className="flex items-center gap-3 p-2 rounded">
          <Button variant="ghost" size="sm" className="p-0.5 bg-gray-100">
            <NavigationIcon />
          </Button>
        </div>

        {/* User profile section */}
        <div className="flex items-center gap-2 p-1.5">
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
        <Link
          to="/home"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
        >
          <HomeIcon />
          <span className="text-sm text-neutral-1">Home</span>
        </Link>

        {/* Account with dropdown */}
        <div className="flex items-center gap-3 p-1.5 rounded hover:bg-gray-50">
          <PersonIcon />
          <span className="text-sm text-neutral-1 flex-1">Account</span>
          <ChevronDown className="h-3 w-3 text-neutral-1" />
        </div>

        {/* Action center with dropdown */}
        <div className="flex items-center gap-3 p-1.5 rounded hover:bg-gray-50">
          <ApprovalsIcon />
          <span className="text-sm text-neutral-1 flex-1">Action center</span>
          <ChevronDown className="h-3 w-3 text-neutral-1" />
        </div>

        {/* Launch apps */}
        <Link
          to="/launch-apps"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
        >
          <AppsIcon />
          <span className="text-sm text-neutral-1">Launch apps</span>
        </Link>

        {/* Manage access */}
        <Link
          to="/manage-access"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
        >
          <LockIcon />
          <span className="text-sm text-neutral-1">Manage access</span>
        </Link>

        {/* Manage people - Active */}
        <Link
          to="/manage-people"
          className={cn(
            "flex items-center gap-3 p-2 rounded relative",
            location.pathname === "/manage-people" || location.pathname === "/"
              ? ""
              : "hover:bg-gray-50",
          )}
        >
          {(location.pathname === "/manage-people" ||
            location.pathname === "/") && (
            <div className="absolute -left-1.5 top-2 bottom-2 w-1 bg-contoso-blue rounded-r"></div>
          )}
          <FilledCircleIcon />
          <span
            className={cn(
              "text-sm font-semibold",
              location.pathname === "/manage-people" ||
                location.pathname === "/"
                ? "text-contoso-blue"
                : "text-neutral-1",
            )}
          >
            Manage people
          </span>
        </Link>

        {/* Divider */}
        <div className="h-px bg-neutral-stroke my-3 mx-0"></div>

        {/* Give feedback */}
        <Link
          to="/feedback"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
        >
          <PersonFeedbackIcon />
          <span className="text-sm text-neutral-1">Give feedback</span>
        </Link>
      </nav>
    </div>
  );
}
