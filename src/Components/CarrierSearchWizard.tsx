import { VStack, useSteps, useToast } from "@chakra-ui/react";
import { CarrierStepper } from "./CarrierStepper";
import { steps } from "../utils/data";
import { NavigationButtons } from "./NavigationButtons";
import { WizardContent } from "./WizardContent";
import { useSearchParams } from "react-router-dom";
import { useCriteria } from "../hooks/useCriteria";
import { useEffect, useState } from "react";
import { useCarrier } from "../hooks/useCarrier";
import { getRandomNumber } from "../utils";

export function CarrierSearchWizard() {
  const toast = useToast();
  const [isFormDataValid, setFormDataValid] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [params, setParams] = useSearchParams();
  const userData = params.get("userData") || "";
  const activeStepFromUrl = parseInt(params.get("step") || "0", 10);
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: activeStepFromUrl,
    count: steps.length,
  });

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

  const handleCompleteClick = () => {
    if (getRandomNumber() < 0.5) {
      //This is to fake error state and display toast !
      toast({
        title: "Error",
        description:
          "An error occurred while processing your request.Please try again!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    } else {
      const updatedParams = new URLSearchParams(params);
      updatedParams.set("userData", JSON.stringify(formData));
      setParams(updatedParams);
      setFormDataValid(false);
      setFormData({});
      setActiveStep(3);
    }
  };

  const handleNextButtonClick = () => {
    if (activeStep === steps.length - 1) {
      handleCompleteClick();
      return;
    } else {
      goToNext();
    }
  };

  const handleSetFormData = (formData: Record<string, string>) => {
    setFormDataValid(true);
    setFormData(formData);
  };

  const handleBookAnotherOrderClick = () => {
    setActiveStep(0);
    const updatedParams = new URLSearchParams(params);
    updatedParams.delete("userData");
    updatedParams.delete("selectedCarrierData");
    updatedParams.delete("isConfettiSeen");
    Object.keys(criteria).forEach((key) => {
      updatedParams.delete(key);
    });
    setParams(updatedParams);
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
        userData={userData}
        carrierData={selectedCarrierData}
        onBookAnotherOrderClick={handleBookAnotherOrderClick}
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
