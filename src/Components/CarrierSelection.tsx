import { Box, SimpleGrid, VStack, Heading } from "@chakra-ui/layout";
import { useFetch } from "../hooks/useFetch";
import { CarrierCard } from "./CarrierCard";
import { Button, Image, Spinner, Tag, Text } from "@chakra-ui/react";
import { CarrierData, CarriersResponse, Criteria } from "../types";
import { getFilteredCarriers, getSelectedCriteria } from "../utils";
import { motion } from "framer-motion";

export interface CarrierSelectionProps {
  criteria: Criteria;
  selectedCarrier: CarrierData;
  onCarrierSelect: (carrier: CarrierData) => void;
  onModifyCriteriaClick: () => void;
}

export function CarrierSelection(props: CarrierSelectionProps) {
  const { criteria, selectedCarrier, onCarrierSelect, onModifyCriteriaClick } =
    props;
  const { data, loading } = useFetch<CarriersResponse>(
    "https://mocki.io/v1/b174654c-dc79-4ca9-9be3-976a206e145c"
  );
  if (!data) {
    return;
  }
  const filteredCarriers = getFilteredCarriers(data.carriers, criteria);

  const selectedCriteria = getSelectedCriteria(criteria);

  const handleCarrierSelect = (name: string) => {
    const selectedCarrier = filteredCarriers.find(
      (carrier) => carrier.name === name
    );
    if (!selectedCarrier) {
      return;
    }
    onCarrierSelect(selectedCarrier);
  };

  return (
    <VStack padding="32px" spacing={4}>
      <Heading alignSelf="flex-start" as="h4">
        Selected Criteria
      </Heading>
      <Box alignSelf="flex-start">
        <Box display="flex" flexWrap="wrap" gap="4px">
          {selectedCriteria.map((criteria) => {
            return (
              <Tag key={criteria} colorScheme="teal" padding={2}>
                {criteria}
              </Tag>
            );
          })}
          <Button onClick={onModifyCriteriaClick}>Modify Criteria</Button>
        </Box>
      </Box>
      {loading && <Spinner size="xl" />}
      <SimpleGrid columns={{ base: 1, md: 3 }} width="100%" spacing={6}>
        {filteredCarriers.map((carrier, index) => (
          <motion.div
            key={carrier.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CarrierCard
              key={carrier.name}
              name={carrier.name}
              rating={carrier.rating}
              available={carrier.availability}
              onTimeDelivery={carrier.onTimeDeliveryPercentage * 100}
              isSelected={selectedCarrier.name === carrier.name}
              onCarrierSelect={handleCarrierSelect}
              bestMatch={carrier.isBestMatch}
            />
          </motion.div>
        ))}
      </SimpleGrid>
      {filteredCarriers.length === 0 && !loading && (
        <Box border="1px solid black" padding={8} borderRadius="8px">
          <Image src="/notFound.jpg" />
          <Text>No carriers found for the selected criteria</Text>
        </Box>
      )}
    </VStack>
  );
}
