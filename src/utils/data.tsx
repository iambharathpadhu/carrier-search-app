import { Box, Text } from "@chakra-ui/react";
import { StarRating } from "../Components/StarRating";

export const steps = [
  { title: "Select Criteria", id: "select-criteria" },
  { title: "Select Carrier", id: "select-carrier" },
  { title: "Confirm Booking", id: "confirm-booking" },
];

export const ratingItems = [4, 3, 2, 1].map((rating) => ({
  id: rating.toString(),
  itemContent: (
    <Box display="flex" alignItems="center" gap="4px">
      <StarRating filled={rating} />
      <Text fontSize="sm">& up</Text>
    </Box>
  ),
}));

export const priceItems = [
  { id: "1000", itemContent: <Text>Above 1000</Text> },
  { id: "500-1000", itemContent: <Text>500-1000</Text> },
  { id: "250-500", itemContent: <Text>250-500</Text> },
  { id: "0-100", itemContent: <Text>Less than 100</Text> },
];

export const specialRequirementsItems = [
  { id: "Refrigerated", itemContent: <Text>Refrigerated</Text> },
  { id: "Hazardous Materials", itemContent: <Text>Hazardous Materials</Text> },
  { id: "Oversized Loads", itemContent: <Text>Oversized Loads</Text> },
  { id: "Eco-Friendly", itemContent: <Text>Eco-Friendly</Text> },
];
