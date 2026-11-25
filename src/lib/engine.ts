import { UserMeasurements, SizeChartEntry, SizeRecommendation, FitPreference } from '../types';

export const CM_TO_INCH = 0.393701;
export const INCH_TO_CM = 2.54;

export const convertCmToInch = (cm: number): number => cm * CM_TO_INCH;
export const convertInchToCm = (inch: number): number => inch * INCH_TO_CM;

/**
 * Enhanced Size Matching Engine
 */
export function calculateRecommendedSize(
  measurements: UserMeasurements,
  sizeChart: SizeChartEntry[],
  fitPref: FitPreference = 'regular'
): SizeRecommendation | null {
  if (!sizeChart || sizeChart.length === 0) return null;

  // Scoring results
  const candidates = sizeChart.map((entry) => {
    let score = 0;
    const fitDetails: SizeRecommendation['fitDetails'] = [];

    // Check Chest (Primary for tops)
    const chestAvg = (entry.chestMin + entry.chestMax) / 2;
    const chestDiff = measurements.chest - chestAvg;
    const chestFit = getFitStatus(measurements.chest, entry.chestMin, entry.chestMax, fitPref);
    score += Math.abs(chestDiff);
    fitDetails.push({ area: 'Chest', status: chestFit, differenceCm: chestDiff });

    // Check Waist
    const waistAvg = (entry.waistMin + entry.waistMax) / 2;
    const waistDiff = measurements.waist - waistAvg;
    const waistFit = getFitStatus(measurements.waist, entry.waistMin, entry.waistMax, fitPref);
    score += Math.abs(waistDiff);
    fitDetails.push({ area: 'Waist', status: waistFit, differenceCm: waistDiff });

    // Check Shoulders (If available)
    if (entry.shouldersMin && entry.shouldersMax) {
        const sAvg = (entry.shouldersMin + entry.shouldersMax) / 2;
        const sDiff = measurements.shoulders - sAvg;
        score += Math.abs(sDiff);
        fitDetails.push({ area: 'Shoulders', status: getFitStatus(measurements.shoulders, entry.shouldersMin, entry.shouldersMax, fitPref), differenceCm: sDiff });
    }

    // Weight of various metrics could be applied here

    return {
      size: entry.size,
      totalScore: score,
      fitDetails
    };
  });

  // Sort by lowest score (closest match)
  candidates.sort((a, b) => a.totalScore - b.totalScore);
  const bestMatch = candidates[0];

  // Calculate confidence based on score
  // A score of 0 is 100% confidence, a score of 10+ starts dropping confidence
  const confidence = Math.max(0, Math.min(100, 100 - (bestMatch.totalScore * 5)));

  // Generate advice
  const isApproximate = confidence < 80;
  let advice = "Great fit for your measurements.";
  if (bestMatch.fitDetails.some(f => f.status === 'tight')) {
    advice = "May feel slightly snug in some areas.";
  } else if (bestMatch.fitDetails.some(f => f.status === 'loose')) {
    advice = "Offers a more relaxed, loose fit.";
  }

  return {
    recommendedSize: bestMatch.size,
    confidence: Math.round(confidence),
    fitDetails: bestMatch.fitDetails,
    isApproximate,
    advice,
    alternativeSize: candidates[1]?.size,
    alternativeReason: candidates[1]?.totalScore - bestMatch.totalScore < 2 ? "For a roomier fit, try this." : undefined
  };
}

function getFitStatus(value: number, min: number, max: number, pref: FitPreference): 'perfect' | 'tight' | 'loose' {
    // Adjusted bounds based on preference
    let adjMin = min;
    let adjMax = max;

    if (pref === 'slim') {
        adjMin -= 2; // Allow smaller size for slim fit
    } else if (pref === 'oversized') {
        adjMax += 4; // Allow larger size for oversized fit
    }

    if (value < adjMin) return 'loose';
    if (value > adjMax) return 'tight';
    return 'perfect';
}
