"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// Badge import removed
import { ReturnsCalculator } from "./ReturnsCalculator";

// I'll define Badge-like styles manually to avoid needing another install step right now, optimizing for speed, 
// unless I want to stick to shadcn strictly. I'll style it manually to look good.

interface RiskProfileCardProps {
  title: string;
  description: string;
  riskLevel: "Low" | "Medium" | "High" | "Extreme";
  volatility: string;
  annualReturn: number;
}

export function RiskProfileCard({ title, description, riskLevel, volatility, annualReturn }: RiskProfileCardProps) {
  
  const getRiskColor = (level: string) => {
    switch (level) {
      case "Low": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Medium": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "High": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Extreme": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "bg-zinc-500/10 text-zinc-500";
    }
  };

  return (
    <Card className="bg-zinc-950 border-zinc-800 text-zinc-100 max-w-2xl w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
            <CardDescription className="text-zinc-400 text-base">{description}</CardDescription>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getRiskColor(riskLevel)}`}>
            {riskLevel} Risk
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <p className="text-sm text-zinc-500 mb-1">Volatility</p>
            <p className="text-lg font-semibold text-zinc-200">{volatility}</p>
          </div>
          <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <p className="text-sm text-zinc-500 mb-1">Avg. Return</p>
            <p className="text-lg font-semibold text-zinc-200">{(annualReturn * 100).toFixed(1)}%</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-300 mb-4">Investment Projection</h3>
            <ReturnsCalculator annualReturn={annualReturn} />
        </div>
      </CardContent>
    </Card>
  );
}
