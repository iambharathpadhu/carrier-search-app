export interface Criteria {
  ratingValue: string;
  priceValue: string;
  specialRequirementsValue: string;
  onTimeDeliveryValue: number;
}

export interface CarrierData {
  name: string;
  rating: number;
  cost: number;
  isBestMatch?: boolean;
  availability: boolean;
  specialRequirements: string[];
  onTimeDeliveryPercentage: number;
}

export interface CarriersResponse {
  carriers: CarrierData[];
}
