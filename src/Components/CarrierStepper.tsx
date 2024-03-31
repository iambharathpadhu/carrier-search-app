import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";

interface Step {
  id: string;
  title: string;
}

export interface CarrierStepperProps {
  steps: Step[];
  activeStep: number;
}

export function CarrierStepper(props: CarrierStepperProps) {
  const { steps, activeStep } = props;
  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <Stepper
        size="lg"
        index={activeStep}
        colorScheme={activeStep === 3 ? "green" : "blue"}
      >
        {steps.map((step) => (
          <Step key={step.id}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
