"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, Gavel, BarChart3, Bitcoin } from "lucide-react";

export function DashboardSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Overview", icon: LayoutDashboard },
    { href: "/savings", label: "Savings", icon: Wallet },
    { href: "/bonds", label: "Bonds", icon: Gavel },
    { href: "/index-funds", label: "Index Funds", icon: BarChart3 },
    { href: "/crypto", label: "Crypto", icon: Bitcoin },
  ];

  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 border-r border-zinc-800 bg-zinc-950 text-zinc-100">
      <div className="flex items-center justify-center h-16 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-tight text-emerald-400">FinRisk<span className="text-white">Dash</span></h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? "bg-zinc-800 text-emerald-400"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
            >
              <Icon size={20} />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-zinc-800">
        <div className="text-xs text-zinc-500">
          Personal Finance Risk Dashboard
        </div>
      </div>
    </div>
  );
}
