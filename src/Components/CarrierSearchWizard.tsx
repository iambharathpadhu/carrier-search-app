import { VStack, useSteps } from "@chakra-ui/react";
import { CarrierStepper } from "./CarrierStepper";
import { steps } from "../utils/data";
import { NavigationButtons } from "./NavigationButtons";
import { WizardContent } from "./WizardContent";
import { useSearchParams } from "react-router-dom";
import { useCriteria } from "../hooks/useCriteria";

export function CarrierSearchWizard() {
  const [params] = useSearchParams();
  const activeStepFromUrl = parseInt(params.get("step") || "0", 10);
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: activeStepFromUrl,
    count: steps.length,
  });
  const getIsNextDisabled = () => {
    return false;
  };

  const { criteria, handleCriteriaChange, hasCriteriaSelected, resetCriteria } =
    useCriteria();

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
      <WizardContent
        activeStep={activeStep}
        criteria={criteria}
        resetCriteria={resetCriteria}
        handleCriteriaChange={handleCriteriaChange}
        hasCriteriaSelected={hasCriteriaSelected}
      />
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
