import { Box } from "@chakra-ui/react";
import { CriteriaSelection, CriteriaSelectionProps } from "./CriteriaSelection";
import { CarrierSelection, CarrierSelectionProps } from "./CarrierSelection";
import { ConfirmBooking, ConfirmBookingProps } from "./ConfirmBooking";
import {
  BookingConfirmation,
  BookingConfirmationProps,
} from "./BookingConfirmation";
import { motion } from "framer-motion";

export interface WizardContentProps
  extends CriteriaSelectionProps,
    CarrierSelectionProps,
    ConfirmBookingProps,
    BookingConfirmationProps {
  activeStep: number;
}

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = { duration: 0.3 };

export function WizardContent(props: WizardContentProps) {
  const {
    activeStep,
    criteria,
    handleCriteriaChange,
    hasCriteriaSelected,
    resetCriteria,
    onCarrierSelect,
    onModifyCriteriaClick,
    selectedCarrier,
    handleSetFormData,
    onBookAnotherOrderClick,
    carrierData,
    userData,
  } = props;
  return (
    <Box border="1px solid black" width="100%" height="80vh" overflowY="auto">
      {activeStep === 0 && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
        >
          <CriteriaSelection
            criteria={criteria}
            handleCriteriaChange={handleCriteriaChange}
            hasCriteriaSelected={hasCriteriaSelected}
            resetCriteria={resetCriteria}
          />
        </motion.div>
      )}
      {activeStep === 1 && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
        >
          <CarrierSelection
            criteria={criteria}
            selectedCarrier={selectedCarrier}
            onModifyCriteriaClick={onModifyCriteriaClick}
            onCarrierSelect={onCarrierSelect}
          />
        </motion.div>
      )}
      {activeStep === 2 && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
        >
          <ConfirmBooking
            selectedCarrier={selectedCarrier}
            handleSetFormData={handleSetFormData}
          />
        </motion.div>
      )}
      {activeStep === 3 && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
        >
          <BookingConfirmation
            userData={userData}
            carrierData={carrierData}
            onBookAnotherOrderClick={onBookAnotherOrderClick}
          />
        </motion.div>
      )}
    </Box>
  );
}
