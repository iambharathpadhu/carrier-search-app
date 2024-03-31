import { VStack, HStack } from "@chakra-ui/layout";
import { CarrierData } from "../types";
import { DetailsForm } from "./DetailsForm";
import { OrderSummary } from "./OrderSummary";
import { useBreakpointValue } from "@chakra-ui/react";

export interface ConfirmBookingProps {
  selectedCarrier: CarrierData;
  handleSetFormData: (formData: Record<string, string>) => void;
}

export function ConfirmBooking(props: ConfirmBookingProps) {
  const { selectedCarrier, handleSetFormData } = props;

  const direction = useBreakpointValue({ base: "column", md: "row" }) as
    | "column"
    | "row"
    | undefined;

  return (
    <VStack
      align="start"
      spacing={4}
      width="100%"
      flexDirection={direction ? direction : "column"}
    >
      <HStack
        width={direction === "row" ? "60%" : "100%"}
        padding="32px"
        borderRight={direction === "row" ? "1px solid #d9d9d9" : "none"}
      >
        <DetailsForm handleSetFormData={handleSetFormData} />
      </HStack>
      <HStack
        width={direction === "row" ? "40%" : "100%"}
        padding="32px"
        borderTop={direction === "column" ? "1px solid #d9d9d9" : "none"}
      >
        <OrderSummary selectedCarrier={selectedCarrier} />
      </HStack>
    </VStack>
  );
}
