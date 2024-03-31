import { VStack, useSteps } from "@chakra-ui/react";
import { CarrierStepper } from "./CarrierStepper";
import { steps } from "../utils/data";
import { NavigationButtons } from "./NavigationButtons";
import { useGetURLParams } from "../hooks/useGetURLParams";
import { WizardContent } from "./WizardContent";

export function CarrierSearchWizard() {
  const { activeStepFromUrl } = useGetURLParams();
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: activeStepFromUrl,
    count: steps.length,
  });
  const getIsNextDisabled = () => {
    return false;
  };
  const handleNextButtonClick = () => {
    if (activeStep === steps.length - 1) {
      return;
    } else {
      goToNext();
    }
  };

  return (
    <VStack justifyContent="space-between" gap="20px" margin="0 auto">
      <CarrierStepper steps={steps} activeStep={0} />
      <WizardContent activeStep={activeStep} />
      <NavigationButtons
        activeStep={activeStep}
        stepsLength={steps.length}
        isNextDisabled={getIsNextDisabled()}
        handlePreviousButtonClick={goToPrevious}
        handleNextButtonClick={handleNextButtonClick}
      />
    </VStack>
  );
}
