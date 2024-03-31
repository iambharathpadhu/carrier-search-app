import {
  Box,
  CloseButton,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

export interface SliderCriteriaComponentProps {
  title: string;
  value: number;
  maxValue: number;
  minValue: number;
  stepValue: number;
  defaultValue: number;
  criteriaName: string;
  handleCriteriaChange: (criteriaName: string, value: number) => void;
}

export function SliderCriteriaComponent(props: SliderCriteriaComponentProps) {
  const {
    title,
    value,
    maxValue,
    minValue,
    stepValue,
    defaultValue,
    criteriaName,
    handleCriteriaChange,
  } = props;
  return (
    <>
      <Box display="flex" alignItems="center" gap="8px" height="32px">
        <Text fontWeight="700">{title}</Text>
        {value !== 0 && (
          <CloseButton onClick={() => handleCriteriaChange(criteriaName, 0)} />
        )}
      </Box>
      <HStack
        width="90%"
        height={"32px"}
        gap={"48px"}
        justifyContent="space-between"
      >
        <Slider
          aria-label={title}
          defaultValue={defaultValue}
          min={minValue}
          max={maxValue}
          step={stepValue}
          flex="1"
          value={value}
          onChange={(value) => handleCriteriaChange(criteriaName, value)}
        >
          <SliderMark value={minValue}>{`${minValue}%`}</SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
          <SliderMark value={maxValue}>{`${maxValue}%`}</SliderMark>
        </Slider>
      </HStack>
    </>
  );
}
