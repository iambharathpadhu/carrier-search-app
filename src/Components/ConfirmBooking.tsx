import { HStack } from "@chakra-ui/layout";
import { CarrierData } from "../types";
import { DetailsForm } from "./DetailsForm";
import { OrderSummary } from "./OrderSummary";

export interface ConfirmBookingProps {
  selectedCarrier: CarrierData;
  handleSetFormData: (formData: Record<string, string>) => void;
}

export function ConfirmBooking(props: ConfirmBookingProps) {
  const { selectedCarrier, handleSetFormData } = props;

  return (
    <HStack align="start" spacing={4} display="flex" width="100%">
      <HStack width="60%" padding="32px" borderRight="1px solid #d9d9d9">
        <DetailsForm handleSetFormData={handleSetFormData} />
      </HStack>
      <HStack width="40%" alignItems="flex-start" padding="32px">
        <OrderSummary selectedCarrier={selectedCarrier} />
      </HStack>
    </HStack>
  );
}
