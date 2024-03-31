import { Box } from "@chakra-ui/react";
import { CriteriaSelection } from "./CriteriaSelection";

export interface WizardContentProps {
  activeStep: number;
}

export function WizardContent(props: WizardContentProps) {
  const { activeStep } = props;
  return (
    <Box border="1px solid black" width="100%" height="80vh" overflowY="auto">
      {activeStep === 0 && <CriteriaSelection />}
      {activeStep === 1 && <p>Content</p>}
      {activeStep === 2 && <p>Content</p>}
      {activeStep === 3 && <p>Content</p>}
    </Box>
  );
}
