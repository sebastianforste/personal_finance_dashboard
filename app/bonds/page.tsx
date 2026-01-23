import { RiskProfileCard } from "@/components/RiskProfileCard";

export default function BondsPage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Bonds</h1>
        <p className="text-zinc-400">Fixed income instruments.</p>
      </div>
      <RiskProfileCard
        title="Government & Corp Bonds"
        description="Loans made to large organizations or governments. Generally lower risk than stocks, providing steady income."
        riskLevel="Medium"
        volatility="Low-Medium"
        annualReturn={0.055}
      />
    </div>
  );
}
