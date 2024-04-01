import { Box, Button } from "@chakra-ui/react";

export interface NavigationButtonsProps {
  activeStep: number;
  stepsLength: number;
  isNextDisabled: boolean;
  handleNextButtonClick: () => void;
  handlePreviousButtonClick: () => void;
}

export function NavigationButtons(props: NavigationButtonsProps) {
  const {
    activeStep,
    isNextDisabled,
    stepsLength,
    handleNextButtonClick,
    handlePreviousButtonClick,
  } = props;

  if (activeStep === stepsLength) {
    return null;
  }

  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <Button onClick={handlePreviousButtonClick} isDisabled={activeStep === 0}>
        Previous
      </Button>
      <Button
        isDisabled={isNextDisabled}
        onClick={handleNextButtonClick}
        colorScheme={activeStep === stepsLength - 1 ? "blue" : "gray"}
        background={isNextDisabled ? "gray.400" : "teal.500"}
        _hover={{ background: isNextDisabled ? "gray.400" : "teal.600" }}
      >
        {activeStep === stepsLength - 1 ? "Complete" : "Next"}
      </Button>
    </Box>
  );
}
