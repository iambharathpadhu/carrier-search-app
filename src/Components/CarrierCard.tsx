import {
  Box,
  Card,
  CardBody,
  Divider,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { StarRating } from "./StarRating";
import { CheckIcon, LinkIcon, StarIcon } from "@chakra-ui/icons";

export interface CarrierCardProps {
  name: string;
  cost: number;
  rating: number;
  available: boolean;
  bestMatch?: boolean;
  isSelected?: boolean;
  isFullWidth?: boolean;
  onTimeDelivery: number;
  disableHoverStyle?: boolean;
  onCarrierSelect: (carrierData: string) => void;
}

export function CarrierCard(props: CarrierCardProps) {
  const {
    name,
    available,
    onTimeDelivery,
    rating,
    onCarrierSelect,
    isSelected,
    bestMatch,
    isFullWidth,
    disableHoverStyle,
    cost,
  } = props;
  const displayBestMatch = useBreakpointValue({ base: false, md: true });
  return (
    <Card
      maxW={isFullWidth ? "100%" : "sm"}
      borderRadius="20px"
      opacity={available ? "100%" : "50%"}
      onClick={() => {
        if (!available) {
          return;
        }
        onCarrierSelect(name);
      }}
      width={isFullWidth ? "100%" : "auto"}
      cursor={available ? "pointer" : "not-allowed"}
      _hover={{
        cursor: disableHoverStyle ? "default" : "pointer",
      }}
    >
      <CardBody>
        <Stack spacing="2" alignItems="flex-start">
          <Box display="flex" justifyContent="space-between" width="100%">
            <VStack alignItems="flex-start">
              <Text fontWeight="700">Name</Text>
              <Text size="md">{name}</Text>
            </VStack>
            {isSelected && <CheckIcon color="green.500" />}
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" width="100%">
            <VStack alignItems="flex-start">
              <Text fontWeight="700">Status</Text>
              <Tag
                size="md"
                background={available ? "#90ee90" : "#ffcccb"}
                borderRadius="8px"
                padding="6px"
              >
                {available ? "In Network" : "Not Available"}
              </Tag>
            </VStack>
            <VStack alignItems="center">
              <Text fontWeight="700">On Time Delivery</Text>
              <Text size="md">{onTimeDelivery} %</Text>
            </VStack>
            <VStack alignItems="center">
              <Text fontWeight="700">Cost</Text>
              <Text size="md">{cost} INR</Text>
            </VStack>
          </Box>
          <Divider />
          <Text fontWeight="700">Rating</Text>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Text alignItems="center" gap="4px">
              <StarRating filled={Math.round(rating)} />({rating} stars)
            </Text>
            {bestMatch &&
              available &&
              (displayBestMatch ? (
                <Tag colorScheme="twitter">
                  <TagLeftIcon boxSize="12px" as={LinkIcon} />
                  <TagLabel>Best Match</TagLabel>
                </Tag>
              ) : (
                <StarIcon />
              ))}
          </Box>
          <Divider />
        </Stack>
      </CardBody>
    </Card>
  );
}
