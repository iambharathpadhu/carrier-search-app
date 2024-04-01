import { Box, Button, Heading, VStack, Text } from "@chakra-ui/react";
import { RadioCriteriaComponent } from "./RadioCriteriaComponent";
import { Criteria } from "../types";
import {
  ratingItems,
  priceItems,
  specialRequirementsItems,
} from "../utils/data";
import { SliderCriteriaComponent } from "./SliderCriteriaComponent";

export interface CriteriaSelectionProps {
  criteria: Criteria;
  resetCriteria: () => void;
  hasCriteriaSelected: boolean;
  handleCriteriaChange: (criteriaName: string, value: string | number) => void;
}

export function CriteriaSelection(props: CriteriaSelectionProps) {
  const { criteria, resetCriteria, handleCriteriaChange, hasCriteriaSelected } =
    props;
  return (
    <Box padding={6} gap="24px" width="100%" alignContent="flex-start">
      <Heading as="h4" display="flex" marginBottom="24px">
        Select a Criteria
      </Heading>
      <Text textAlign="left" fontWeight="800">
        Select one or more criteria to filter the Carriers
      </Text>
      <VStack alignItems="flex-start" gap="16px">
        <RadioCriteriaComponent
          items={ratingItems}
          title="Rating"
          value={criteria.ratingValue}
          handleCriteriaChange={handleCriteriaChange}
          criteriaName="ratingValue"
        />
        <RadioCriteriaComponent
          items={priceItems}
          title="Price Range option"
          value={criteria.priceValue}
          handleCriteriaChange={handleCriteriaChange}
          criteriaName="priceValue"
        />
        <RadioCriteriaComponent
          items={specialRequirementsItems}
          title="Special Requirement"
          value={criteria.specialRequirementsValue}
          handleCriteriaChange={handleCriteriaChange}
          criteriaName="specialRequirementsValue"
        />
        <SliderCriteriaComponent
          criteriaName="onTimeDeliveryValue"
          handleCriteriaChange={handleCriteriaChange}
          minValue={0}
          maxValue={100}
          value={criteria.onTimeDeliveryValue}
          stepValue={10}
          defaultValue={0}
          title="On Time Delivery Percentage"
        />
        {hasCriteriaSelected && (
          <Button onClick={resetCriteria}>Clear All</Button>
        )}
      </VStack>
    </Box>
  );
}
