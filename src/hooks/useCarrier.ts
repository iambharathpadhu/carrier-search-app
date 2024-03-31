import { useSearchParams } from "react-router-dom";
import { CarrierData } from "../types";

export function useCarrier() {
  const [params, setParams] = useSearchParams();
  const selectedCarrierData = params.get("selectedCarrierData") || "";
  const handleCarrierSelect = (carrier: CarrierData) => {
    const updatedParams = new URLSearchParams(params);
    if (
      selectedCarrierData &&
      selectedCarrierData === JSON.stringify(carrier)
    ) {
      updatedParams.delete("selectedCarrierData");
    } else {
      updatedParams.set("selectedCarrierData", JSON.stringify(carrier));
    }
    setParams(updatedParams);
  };

  return {
    selectedCarrier: JSON.parse(selectedCarrierData || "{}"),
    selectedCarrierData,
    handleCarrierSelect,
  };
}
