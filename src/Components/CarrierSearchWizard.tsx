import { VStack, useSteps } from "@chakra-ui/react";
import { CarrierStepper } from "./CarrierStepper";
import { steps } from "../utils/data";
import { NavigationButtons } from "./NavigationButtons";
import { WizardContent } from "./WizardContent";
import { useSearchParams } from "react-router-dom";
import { useCriteria } from "../hooks/useCriteria";
import { useEffect, useState } from "react";
import { useCarrier } from "../hooks/useCarrier";

export function CarrierSearchWizard() {
  const [isFormDataValid, setFormDataValid] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [params, setParams] = useSearchParams();
  const activeStepFromUrl = parseInt(params.get("step") || "0", 10);
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: activeStepFromUrl,
    count: steps.length,
  });
  console.log("FormData", formData);

  useEffect(() => {
    //To update the step value to the URL
    const updatedParams = new URLSearchParams(params);
    updatedParams.set("step", activeStep.toString());
    setParams(updatedParams);
  }, [activeStep, params, setParams]);

  const { criteria, handleCriteriaChange, hasCriteriaSelected, resetCriteria } =
    useCriteria();

  const { selectedCarrier, handleCarrierSelect, selectedCarrierData } =
    useCarrier();

  const getIsNextDisabled = () => {
    if (activeStep === 0) {
      return !Object.values(criteria).some((value) => value);
    }
    if (activeStep === 1) {
      return !selectedCarrierData;
    }
    if (activeStep === 2) {
      return !isFormDataValid;
    }
    return false;
  };

  const handleNextButtonClick = () => {
    if (activeStep === steps.length - 1) {
      return;
    } else {
      goToNext();
    }
  };

  const handleSetFormData = (formData: Record<string, string>) => {
    setFormDataValid(true);
    setFormData(formData);
  };

  return (
    <VStack justifyContent="space-between" gap="20px" margin="0 auto">
      <CarrierStepper steps={steps} activeStep={activeStep} />
      <WizardContent
        criteria={criteria}
        activeStep={activeStep}
        selectedCarrier={selectedCarrier}
        onCarrierSelect={handleCarrierSelect}
        resetCriteria={resetCriteria}
        handleCriteriaChange={handleCriteriaChange}
        hasCriteriaSelected={hasCriteriaSelected}
        onModifyCriteriaClick={goToPrevious}
        handleSetFormData={handleSetFormData}
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
