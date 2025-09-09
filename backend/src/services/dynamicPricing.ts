export function calculatePrice(basePrice: number, type: string, demandMultiplier: number) {
  let multiplier = 1;
  if (type === "VIP") multiplier = 1.5;
  else if (type === "Shared") multiplier = 0.8;
  else if (type === "Eco") multiplier = 0.7;
  else if (type === "Delivery") multiplier = 1.2;
  return Math.round(basePrice * multiplier * demandMultiplier * 100) / 100;
}
