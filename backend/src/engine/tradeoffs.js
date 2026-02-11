export function compareHousingOptions(optionA, optionB) {
  const totalHousingA = optionA.rentMonthly + optionA.transportMonthly;
  const totalHousingB = optionB.rentMonthly + optionB.transportMonthly;

  const costDifference = totalHousingB - totalHousingA;

  const commuteDiff =
    (optionB.commuteTimeMins ?? 0) - (optionA.commuteTimeMins ?? 0);

  return {
    cheaperOption: costDifference > 0 ? "Option A" : "Option B",
    monthlyCostDifference: Math.abs(costDifference),
    commuteTimeDifference: commuteDiff,
    insight:
      commuteDiff > 0
        ? `Option B increases commute by ${commuteDiff} mins daily`
        : `Option B reduces commute time`,
  };
}
