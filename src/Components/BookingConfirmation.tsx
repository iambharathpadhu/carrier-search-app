import { Center, Flex, Heading } from "@chakra-ui/layout";
import { Box, Text, Image, Button } from "@chakra-ui/react";

export interface BookingConfirmationProps {
  userData: string;
  carrierData: string;
  onBookAnotherOrderClick: () => void;
}

export function BookingConfirmation(props: BookingConfirmationProps) {
  const { userData, carrierData, onBookAnotherOrderClick } = props;
  const parsedUserData = JSON.parse(userData);
  const parsedCarrierData = JSON.parse(carrierData);
  return (
    <Center flexDirection="column" gap="16px">
      <Heading color="green.500" mb={4}>
        Success
      </Heading>
      <Image src={"/truckImage.jpg"} alt="Truck" boxSize="auto" mb={4} />
      <Flex justifyContent="center">
        <Box borderRadius="8px" borderWidth="1px" p={4} m={2}>
          <Heading size="md" mb={2}>
            Shipping Details
          </Heading>
          <Text>Address: {parsedUserData.address}</Text>
          <Text>Zip Code: {parsedUserData.zipCode}</Text>
        </Box>
        <Box borderRadius="8px" borderWidth="1px" p={4} m={2}>
          <Heading size="md" mb={2}>
            Carrier Details
          </Heading>
          <Text>Carrier Name: {parsedCarrierData.name}</Text>
          <Text>Shipping Cost: {parsedCarrierData.cost}</Text>
        </Box>
      </Flex>
      <Text mt={4} fontSize="xl">
        Thank you {parsedUserData.firstName} for your order!
      </Text>
      <Button onClick={onBookAnotherOrderClick}>Book another order!</Button>
    </Center>
  );
}
