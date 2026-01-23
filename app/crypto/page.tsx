import { RiskProfileCard } from "@/components/RiskProfileCard";

export default function CryptoPage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Cryptocurrency</h1>
        <p className="text-zinc-400">Digital assets and blockchain technology.</p>
      </div>
      <RiskProfileCard
        title="Bitcoin & Ethereum"
        description="Decentralized digital currencies. Highly speculative stores of value and smart contract platforms."
        riskLevel="Extreme"
        volatility="High"
        annualReturn={0.15} // Conservative bullish estimate for projection demo
      />
    </div>
  );
}
