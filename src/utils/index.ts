import { CarrierData, Criteria } from "../types";

export function getFilteredCarriers(
  carriers: CarrierData[],
  criteria: Criteria
) {
  return carriers.filter((carrier: CarrierData) => {
    const {
      ratingValue,
      priceValue,
      specialRequirementsValue,
      onTimeDeliveryValue,
    } = criteria;

    if (
      !ratingValue &&
      !priceValue &&
      !specialRequirementsValue &&
      !onTimeDeliveryValue
    ) {
      return true;
    }

    let matchCount = 0;

    if (ratingValue && carrier.rating >= Number(ratingValue)) {
      matchCount++;
    }

    if (priceValue) {
      const [min, max] = priceValue.split("-");
      if (!max) {
        if (carrier.cost >= Number(min)) {
          matchCount++;
        }
      } else if (carrier.cost >= Number(min) && carrier.cost <= Number(max)) {
        matchCount++;
      }
    }

    if (
      specialRequirementsValue &&
      carrier.specialRequirements.includes(specialRequirementsValue)
    ) {
      matchCount++;
    }

    if (
      onTimeDeliveryValue &&
      carrier.onTimeDeliveryPercentage >= onTimeDeliveryValue / 100
    ) {
      matchCount++;
    }

    return matchCount === Object.values(criteria).filter(Boolean).length;
  });
}

export function getSelectedCriteria(criteria: Criteria) {
  return Object.entries(criteria)
    .filter(([, value]) => value !== "" && value !== undefined && value !== 0)
    .map(([key, value]) => {
      if (key === "ratingValue") {
        return `Rating: ${value} stars and up`;
      }
      if (key === "priceValue") {
        return `Price: ${value}`;
      }
      if (key === "specialRequirementsValue") {
        return `Special Requirements: ${value}`;
      }
      if (key === "onTimeDeliveryValue") {
        return `On Time Delivery: ${value}% and up`;
      }
    });
}

export function getBestMatchingCarrier(filteredCarriers: CarrierData[]) {
  return filteredCarriers.reduce(
    (acc, curr) => {
      if (curr.rating > acc.rating) {
        return curr;
      }
      return acc;
    },
    { rating: 0, name: "" }
  );
}
