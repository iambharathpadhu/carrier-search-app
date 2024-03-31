import { Box, Divider, Heading, VStack, Text } from "@chakra-ui/react";
import { CarrierCard } from "./CarrierCard";
import { ConfirmBookingProps } from "./ConfirmBooking";

export function OrderSummary(
  props: Pick<ConfirmBookingProps, "selectedCarrier">
) {
  const { selectedCarrier } = props;
  return (
    <VStack width="100%">
      <Heading>Order Summary</Heading>
      <Box
        display="flex"
        alignSelf="center"
        marginBottom="16px"
        maxWidth="100%"
        width="100%"
        padding={4}
      >
        <CarrierCard
          name={selectedCarrier.name}
          available
          onTimeDelivery={selectedCarrier.onTimeDeliveryPercentage * 100}
          rating={selectedCarrier.rating}
          onCarrierSelect={() => {}}
          isFullWidth
        />
      </Box>
      <Box
        alignItems="flex-start"
        alignContent="flex-start"
        gap="8px"
        display="flex"
        flexDirection="column"
        border="1px solid #d9d9d9"
        padding="16px"
        borderRadius="8px"
      >
        <Text textAlign="left" fontWeight="600">
          Freight Booking Confirmation
        </Text>
        <Divider />
        <Text textAlign="left">
          Thank you for choosing our Freight booking service!
        </Text>
        <Text textAlign="left">You have selected the following carrier:</Text>
        <Text textAlign="left" fontWeight="700">
          Carrier : {selectedCarrier.name}
        </Text>
        <Text textAlign="left" fontWeight="700">
          Cost : {selectedCarrier.cost}
        </Text>
        <Text textAlign="left">
          Please review the details carefully. If everything looks correct, go
          ahead and proceed with the booking.
        </Text>
        <Text textAlign="left">
          If you have any questions or need further assistance, feel free to
          contact our customer support team.
        </Text>
      </Box>
    </VStack>
  );
}
