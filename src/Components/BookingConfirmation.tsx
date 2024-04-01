import { Center, Flex, Heading } from "@chakra-ui/layout";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import Confetti from "react-confetti";
import { useSearchParams } from "react-router-dom";

export interface BookingConfirmationProps {
  userData: string;
  carrierData: string;
  onBookAnotherOrderClick: () => void;
}

export function BookingConfirmation(props: BookingConfirmationProps) {
  const { userData, carrierData, onBookAnotherOrderClick } = props;
  const parsedUserData = JSON.parse(userData);
  const parsedCarrierData = JSON.parse(carrierData);
  const [params, setParams] = useSearchParams();
  const isConfettiSeen = params.get("isConfettiSeen");

  useEffect(() => {
    if (!isConfettiSeen) {
      setTimeout(() => {
        const newParams = new URLSearchParams(params);
        newParams.set("isConfettiSeen", "true");
        setParams(newParams);
      }, 3000);
    }
  }, [isConfettiSeen, params, setParams]);

  return (
    <Center flexDirection="column" gap="16px">
      <Heading color="green.500" mb={4}>
        Success
      </Heading>
      {!isConfettiSeen && <Confetti />}
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
