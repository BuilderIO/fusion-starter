import { MoreVertical, User, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface EmployeeCardProps {
  name: string;
  email: string;
  avatar?: string;
  initials?: string;
  presenceStatus: "available" | "busy" | "away" | "offline" | "oof";
  isNewMember?: boolean;
  isGuest?: boolean;
  isInactive?: boolean;
  hasBlueAccent?: boolean;
  className?: string;
}

const presenceColors = {
  available: "bg-presence-available",
  busy: "bg-presence-busy",
  away: "bg-presence-away",
  offline: "bg-presence-offline",
  oof: "bg-presence-oof",
};

const presenceIcons = {
  available: "✓",
  busy: "",
  away: "⏰",
  offline: "✕",
  oof: "→",
};

export function EmployeeCard({
  name,
  email,
  avatar,
  initials,
  presenceStatus,
  isNewMember = false,
  isGuest = false,
  isInactive = false,
  hasBlueAccent = false,
  className,
}: EmployeeCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded border border-gray-200 shadow-card overflow-hidden relative",
        className,
      )}
    >
      {/* Left accent border */}
      {hasBlueAccent && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-contoso-blue"></div>
      )}
      {isInactive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-warning-icon"></div>
      )}

      <div className="p-4">
        <div className="flex items-center gap-4">
          {/* Avatar with presence */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              {avatar ? (
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : initials ? (
                <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="text-purple-700 font-semibold text-base">
                    {initials}
                  </span>
                </div>
              ) : (
                <User className="w-8 h-8 text-gray-400" />
              )}
            </div>
            {/* Presence indicator */}
            <div
              className={cn(
                "absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center",
                presenceColors[presenceStatus],
              )}
            >
              {presenceStatus === "available" && (
                <span className="text-white text-xs font-bold">✓</span>
              )}
              {presenceStatus === "busy" && (
                <span className="text-white text-xs">−</span>
              )}
              {presenceStatus === "away" && (
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              )}
              {presenceStatus === "offline" && (
                <span className="text-white text-xs">×</span>
              )}
              {presenceStatus === "oof" && (
                <span className="text-white text-xs">→</span>
              )}
            </div>
          </div>

          {/* Info section */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base text-neutral-1 truncate">
              {name}
            </h3>
            <p className="text-sm text-neutral-2 truncate">{email}</p>

            {/* Additional indicators */}
            {isNewMember && (
              <div className="flex items-center gap-1 mt-2">
                <User className="w-3.5 h-3.5 text-neutral-1" />
                <span className="text-sm text-neutral-1">New team member</span>
              </div>
            )}

            {isInactive && (
              <div className="flex items-center gap-1 mt-2">
                <AlertTriangle className="w-3.5 h-3.5 text-warning-icon" />
                <span className="text-sm text-neutral-1">
                  Inactive for the last 30 days
                </span>
              </div>
            )}
          </div>

          {/* More actions button */}
          <Button variant="ghost" size="sm" className="p-2 text-neutral-2">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
