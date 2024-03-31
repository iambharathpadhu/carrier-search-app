import { useSearchParams } from "react-router-dom";
import { Criteria } from "../types";

export function useCriteria() {
  const [params, setParams] = useSearchParams();
  const ratingValue = params.get("ratingValue") || "";
  const priceValue = params.get("priceValue") || "";
  const specialRequirementsValue = params.get("specialRequirementsValue") || "";
  const onTimeDeliveryValue = parseInt(
    params.get("onTimeDeliveryValue") || "0",
    10
  );
  const criteria: Criteria = {
    ratingValue,
    priceValue,
    specialRequirementsValue,
    onTimeDeliveryValue,
  };

  const resetCriteria = () => {
    const updatedParams = new URLSearchParams(params);
    Object.keys(criteria).forEach((key) => {
      updatedParams.delete(key);
    });
    setParams(updatedParams);
  };

  const handleCriteriaChange = (
    criteriaName: string,
    value: string | number | boolean
  ) => {
    const updatedParams = new URLSearchParams(params);
    if (!value) {
      updatedParams.delete(criteriaName);
    } else {
      updatedParams.set(criteriaName, value.toString());
    }
    setParams(updatedParams);
  };

  const hasCriteriaSelected = Object.values(criteria).some((value) => value);

  return {
    criteria,
    resetCriteria,
    hasCriteriaSelected,
    handleCriteriaChange,
  };
}
