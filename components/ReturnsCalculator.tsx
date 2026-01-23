"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReturnsCalculatorProps {
  annualReturn: number; // e.g., 0.05 for 5%
  initialInvestment?: number;
}

export function ReturnsCalculator({ annualReturn, initialInvestment = 10000 }: ReturnsCalculatorProps) {
  const [years, setYears] = useState([10]);

  const yearValue = years[0];
  const futureValue = initialInvestment * Math.pow(1 + annualReturn, yearValue);

  return (
    <div className="space-y-6 pt-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-zinc-400">Time Horizon</span>
        <span className="font-semibold text-zinc-100">{yearValue} Years</span>
      </div>
      
      <Slider
        value={years}
        onValueChange={setYears}
        max={30}
        min={1}
        step={1}
        className="py-4"
      />

      <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
        <p className="text-sm text-zinc-500 mb-1">Projected Value ({initialInvestment.toLocaleString()}$ initial)</p>
        <p className="text-3xl font-bold text-emerald-400">
          ${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </p>
        <p className="text-xs text-zinc-500 mt-2">
          Assuming average annual return of {(annualReturn * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
}
