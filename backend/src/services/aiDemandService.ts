import { Trip } from "../models/Trip";

interface DemandPrediction {
  month: string;
  predictedTrips: number;
}

export function predictMonthlyDemand(trips: Trip[]): DemandPrediction[] {
  // مثال بسيط: تحليل الرحلات السابقة حسب الشهر
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const result: DemandPrediction[] = months.map(m => {
    const count = trips.filter(t => new Date(t.createdAt).toLocaleString('en-US', { month: 'short' }) === m).length;
    return { month: m, predictedTrips: count + Math.floor(Math.random()*5) }; // إضافة عامل عشوائي للتوقع
  });
  return result;
}

export function suggestSmartOffers(trips: Trip[]): string[] {
  // اقتراح عروض ديناميكية بناءً على الطلب المرتفع والمنخفض
  const highDemandTrips = trips.filter(t => t.type === "VIP" || t.type === "Shared");
  const lowDemandTrips = trips.filter(t => t.type === "Eco" || t.type === "Delivery");
  const offers = [];
  if (highDemandTrips.length > lowDemandTrips.length) {
    offers.push("خصم VIP 10%");
  } else {
    offers.push("رحلات Eco مجانية لأول 5 مستخدمين");
  }
  return offers;
}
