import {
  RadioGroup,
  Stack,
  Radio,
  VStack,
  Text,
  CloseButton,
  HStack,
  Box,
} from "@chakra-ui/react";

export interface RadioCriteriaComponentProps {
  title: string;
  value: string;
  criteriaName: string;
  items: { id: string; itemContent: React.ReactNode }[];
  handleCriteriaChange: (criteriaName: string, value: string | number) => void;
}

export function RadioCriteriaComponent(props: RadioCriteriaComponentProps) {
  const { title, value, handleCriteriaChange, criteriaName, items } = props;
  return (
    <VStack alignItems="flex-start">
      <Box display="flex" alignItems="center" gap="8px" height="32px">
        <Text fontWeight="700">{title}</Text>
        {value !== "" && (
          <CloseButton onClick={() => handleCriteriaChange(criteriaName, "")} />
        )}
      </Box>
      <HStack height="32px">
        <RadioGroup
          value={value}
          onChange={(next) => handleCriteriaChange(criteriaName, next)}
        >
          <Stack direction="row">
            {items.map((item) => (
              <Radio key={item.id} value={item.id}>
                {item.itemContent}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </HStack>
    </VStack>
  );
}
