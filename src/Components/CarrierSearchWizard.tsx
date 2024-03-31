import { VStack } from "@chakra-ui/react";
import { CarrierStepper } from "./CarrierStepper";
import { steps } from "../utils/data";

export function CarrierSearchWizard() {
  return (
    <VStack justifyContent="space-between" gap="20px" margin="0 auto">
      <CarrierStepper steps={steps} activeStep={0} />
    </VStack>
  );
}
