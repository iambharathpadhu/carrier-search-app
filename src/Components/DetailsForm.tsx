import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { ConfirmBookingProps } from "./ConfirmBooking";

export function DetailsForm(
  props: Pick<ConfirmBookingProps, "handleSetFormData">
) {
  const { handleSetFormData } = props;
  const {
    formState: { isValid, isDirty, errors },
    control,
    getValues,
  } = useForm({ mode: "all" });
  useEffect(() => {
    if (isValid && isDirty) {
      handleSetFormData(getValues());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getValues, isDirty, isValid]);
  return (
    <VStack width="90%">
      <Heading alignSelf="flex-start">Shipping Information</Heading>
      <FormControl display="flex" flexDirection="column" gap="8px">
        <FormLabel>First name</FormLabel>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.firstName && typeof errors.firstName.message === "string" && (
          <Text textAlign="left" p={2} color="red">
            {errors.firstName.message}
          </Text>
        )}
        <FormLabel>Last name</FormLabel>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Last name is required" }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.lastName && typeof errors.lastName.message === "string" && (
          <Text textAlign="left" p={2} color="red">
            {errors.lastName.message}
          </Text>
        )}
        <FormLabel>Address</FormLabel>
        <Controller
          name="address"
          control={control}
          rules={{ required: "Address is required" }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.address && typeof errors.address.message === "string" && (
          <Text textAlign="left" p={2} color="red">
            {errors.address.message}
          </Text>
        )}
        <Box display="flex" gap="4px">
          <Box flexGrow={2}>
            <FormLabel>City</FormLabel>
            <Controller
              name="city"
              control={control}
              rules={{ required: "City is required" }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.city && typeof errors.city.message === "string" && (
              <Text textAlign="left" p={2} color="red">
                {errors.city.message}
              </Text>
            )}
          </Box>
          <Box>
            <FormLabel>Zipcode</FormLabel>
            <Controller
              name="zipCode"
              control={control}
              rules={{
                required: "Zipcode is required",
                pattern: {
                  value: /^\d{6}$/,
                  message: "Invalid Zip-code, enter 6 digits",
                },
              }}
              render={({ field }) => <Input {...field} />}
            />
            {errors.zipCode && typeof errors.zipCode.message === "string" && (
              <Text textAlign="left" p={2} color="red">
                {errors.zipCode.message}
              </Text>
            )}
          </Box>
        </Box>
        <FormLabel>Email</FormLabel>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.email && typeof errors.email.message === "string" && (
          <Text textAlign="left" p={2} color="red">
            {errors.email.message}
          </Text>
        )}
        <FormLabel>Card Number</FormLabel>
        <Controller
          name="cardNumber"
          control={control}
          rules={{
            required: "Card Number is required",
            pattern: {
              value: /^\d{16}$/,
              message: "Invalid Card Number, enter 16 digits",
            },
          }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.cardNumber && typeof errors.cardNumber.message === "string" && (
          <Text textAlign="left" p={2} color="red">
            {errors.cardNumber.message}
          </Text>
        )}
        <FormLabel>Expiration Date</FormLabel>
        <Controller
          name="expirationDate"
          control={control}
          rules={{
            required: "Expiry Date is required",
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="month"
              min="1000-01"
              max="9999-12"
              required
            />
          )}
        />
        {errors.expirationDate &&
          typeof errors.expirationDate.message === "string" && (
            <Text textAlign="left" p={2} color="red">
              {errors.expirationDate.message}
            </Text>
          )}
      </FormControl>
    </VStack>
  );
}
