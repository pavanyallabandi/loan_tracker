'use client';

import { Box, Heading, Text } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box maxW="xl" mx="auto" mt={24} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading as="h1" size="xl" mb={4}>
        Loan Tracker
      </Heading>
      <Text fontSize="lg">
        Welcome to your Loan Tracker app! Start by adding a new loan or viewing your current loans.
      </Text>
    </Box>
  );
}