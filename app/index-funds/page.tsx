import { RiskProfileCard } from "@/components/RiskProfileCard";

export default function IndexFundsPage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Index Funds</h1>
        <p className="text-zinc-400">Broad market exposure.</p>
      </div>
      <RiskProfileCard
        title="S&P 500 Index Fund"
        description="Tracking the performance of the 500 largest companies listed in stock exchanges in the United States."
        riskLevel="High"
        volatility="Medium"
        annualReturn={0.10}
      />
    </div>
  );
}
