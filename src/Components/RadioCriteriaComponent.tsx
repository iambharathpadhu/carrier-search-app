import {
  RadioGroup,
  Stack,
  Radio,
  VStack,
  Text,
  CloseButton,
  Box,
  useBreakpointValue,
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

  const stackDirection = useBreakpointValue({ base: "column", md: "row" }) as
    | "column"
    | "row"
    | undefined;

  return (
    <VStack alignItems="flex-start" spacing={2}>
      <Box display="flex" alignItems="center" gap="8px" height="32px">
        <Text fontWeight="700">{title}</Text>
        {value !== "" && (
          <CloseButton onClick={() => handleCriteriaChange(criteriaName, "")} />
        )}
      </Box>
      <RadioGroup
        value={value}
        onChange={(next) => handleCriteriaChange(criteriaName, next)}
      >
        <Stack direction={stackDirection} spacing={2}>
          {items.map((item) => (
            <Radio key={item.id} value={item.id}>
              {item.itemContent}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </VStack>
  );
}
