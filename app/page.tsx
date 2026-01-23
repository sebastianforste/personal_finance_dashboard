import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Wallet, Gavel, BarChart3, Bitcoin } from "lucide-react";

export default function Home() {
  const assets = [
    {
      title: "Savings Accounts",
      href: "/savings",
      icon: Wallet,
      description: "Secure, low-yield cash storage.",
      risk: "Low",
    },
    {
      title: "Government Bonds",
      href: "/bonds",
      icon: Gavel,
      description: "Fixed income securities backed by government.",
      risk: "Low-Medium",
    },
    {
      title: "Index Funds",
      href: "/index-funds",
      icon: BarChart3,
      description: "Diversified market exposure (S&P 500).",
      risk: "Medium-High",
    },
    {
      title: "Cryptocurrency",
      href: "/crypto",
      icon: Bitcoin,
      description: "High-volatility digital assets.",
      risk: "Extreme",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard Overview</h1>
        <p className="text-zinc-400">Welcome to your personal finance risk assessment tool.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {assets.map((asset) => {
          const Icon = asset.icon;
          return (
            <Link key={asset.href} href={asset.href}>
              <Card className="hover:bg-zinc-900 transition-colors cursor-pointer border-zinc-800 bg-zinc-950 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-zinc-900 rounded-lg text-emerald-400">
                        <Icon size={24} />
                    </div>
                    <ArrowRight className="text-zinc-500" size={20} />
                  </div>
                  <CardTitle className="mt-4 text-xl">{asset.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{asset.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium text-zinc-500">
                    Risk Assessment: <span className="text-zinc-300">{asset.risk}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
