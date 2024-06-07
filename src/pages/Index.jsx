import { Container, VStack, Heading, Text, Button, Box, Image, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">Band Name</Heading>
        <Text fontSize="xl">Join us on our amazing tour across the country!</Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/image.jpg" alt="Band Image" objectFit="cover" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg">Get Tickets</Button>
        <HStack spacing={4}>
          <Button as="a" href="https://facebook.com" target="_blank" leftIcon={<FaFacebook />} colorScheme="facebook">
            Facebook
          </Button>
          <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="twitter">
            Twitter
          </Button>
          <Button as="a" href="https://instagram.com" target="_blank" leftIcon={<FaInstagram />} colorScheme="pink">
            Instagram
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;