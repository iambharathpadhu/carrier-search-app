import { Box } from "@chakra-ui/react";
import { CriteriaSelection, CriteriaSelectionProps } from "./CriteriaSelection";

export interface WizardContentProps extends CriteriaSelectionProps {
  activeStep: number;
}

export function WizardContent(props: WizardContentProps) {
  const {
    activeStep,
    criteria,
    handleCriteriaChange,
    hasCriteriaSelected,
    resetCriteria,
  } = props;
  return (
    <Box border="1px solid black" width="100%" height="80vh" overflowY="auto">
      {activeStep === 0 && (
        <CriteriaSelection
          criteria={criteria}
          handleCriteriaChange={handleCriteriaChange}
          hasCriteriaSelected={hasCriteriaSelected}
          resetCriteria={resetCriteria}
        />
      )}
      {activeStep === 1 && <p>Content</p>}
      {activeStep === 2 && <p>Content</p>}
      {activeStep === 3 && <p>Content</p>}
    </Box>
  );
}
