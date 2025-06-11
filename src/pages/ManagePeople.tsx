import {
  Search,
  Filter,
  ChevronDown,
  X,
  AlertTriangle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmployeeCard } from "@/components/EmployeeCard";
import { useState } from "react";

export default function ManagePeople() {
  const [showWarning, setShowWarning] = useState(true);

  const employees = [
    {
      name: "Aadi Kapoor",
      email: "aadi@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "available" as const,
    },
    {
      name: "Cassandra Dunn",
      email: "cassandra@contoso.com",
      initials: "CD",
      presenceStatus: "available" as const,
      isNewMember: true,
      hasBlueAccent: true,
    },
    {
      name: "Celeste Burton",
      email: "celeste@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "busy" as const,
    },
    {
      name: "Danielle Booker",
      email: "danielle@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "busy" as const,
    },
    {
      name: "Erik Nason",
      email: "erik@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "available" as const,
    },
    {
      name: "Joshua Vanburen",
      email: "joshua@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "away" as const,
    },
    {
      name: "Kayo Miwa",
      email: "kayo@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "busy" as const,
    },
    {
      name: "Kian Lambert",
      email: "kian@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "available" as const,
    },
    {
      name: "Reta Taylor",
      email: "reta@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "oof" as const,
    },
    {
      name: "Serena Ribeiro",
      email: "serena@contoso.com",
      avatar: "/placeholder.svg",
      presenceStatus: "available" as const,
    },
  ];

  const guests = [
    {
      name: "Ed Plant (Consulting Inc)",
      email: "eplant@consultinginc.com",
      initials: "EP",
      presenceStatus: "offline" as const,
      isGuest: true,
      isInactive: true,
    },
    {
      name: "Dan Sezer (Consulting Inc)",
      email: "dsezer@consultinginc.com",
      initials: "DS",
      presenceStatus: "available" as const,
      isGuest: true,
    },
  ];

  return (
    <div className="flex-1 p-8 bg-neutral-background min-h-screen overflow-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-neutral-1">Manage people</h1>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-neutral-1 border-neutral-stroke"
        >
          <Users className="w-4 h-4" />
          Delegate approvals
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-2 mb-8">
        <div className="relative flex-1 max-w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-3" />
          <Input
            placeholder="Type name, title, etc."
            className="pl-10 border-neutral-stroke h-10"
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-neutral-1 border-neutral-stroke h-10"
        >
          <Filter className="w-4 h-4" />
          Filters
        </Button>
        <Button variant="ghost" size="sm" className="bg-gray-100 h-10 px-2">
          <ChevronDown className="w-3 h-3 text-neutral-2" />
        </Button>
      </div>

      {/* People reporting to you section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" className="p-1 bg-gray-100">
            <ChevronDown className="w-3 h-3 text-neutral-2" />
          </Button>
          <h2 className="text-lg font-semibold text-neutral-1">
            People reporting to you (10)
          </h2>
        </div>

        {/* Warning Banner */}
        {showWarning && (
          <div className="flex items-center gap-3 p-3 mb-4 bg-warning-background border border-warning-border rounded">
            <AlertTriangle className="w-4 h-4 text-warning-foreground flex-shrink-0" />
            <div className="flex-1 text-sm">
              <span className="font-semibold text-neutral-1">
                Access review due in 24 days
              </span>{" "}
              <span className="text-neutral-1">
                Review access of your direct reports by Sept 30.
              </span>{" "}
              <button className="text-brand-link underline">
                Go to action center
              </button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowWarning(false)}
              className="p-1"
            >
              <X className="w-3 h-3 text-neutral-2" />
            </Button>
          </div>
        )}

        {/* Employee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.email}
              name={employee.name}
              email={employee.email}
              avatar={employee.avatar}
              initials={employee.initials}
              presenceStatus={employee.presenceStatus}
              isNewMember={employee.isNewMember}
              hasBlueAccent={employee.hasBlueAccent}
              className="h-28"
            />
          ))}
        </div>
      </div>

      {/* Guests section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" size="sm" className="p-1 bg-gray-100">
            <ChevronDown className="w-3 h-3 text-neutral-2" />
          </Button>
          <h2 className="text-lg font-semibold text-neutral-1">Guests (2)</h2>
        </div>

        {/* Guest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {guests.map((guest) => (
            <EmployeeCard
              key={guest.email}
              name={guest.name}
              email={guest.email}
              initials={guest.initials}
              presenceStatus={guest.presenceStatus}
              isGuest={guest.isGuest}
              isInactive={guest.isInactive}
              className="h-28"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
