import { RiskProfileCard } from "@/components/RiskProfileCard";

export default function SavingsPage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Savings Accounts</h1>
        <p className="text-zinc-400">High-yield savings and CDs.</p>
      </div>
      <RiskProfileCard
        title="High-Yield Savings"
        description="A deposit account that pays a higher interest rate than standard savings accounts. Extremely liquid and FDIC insured."
        riskLevel="Low"
        volatility="Very Low"
        annualReturn={0.045}
      />
    </div>
  );
}
