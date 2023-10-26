import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Link,
  Tailwind,
} from "@react-email/components";

const WelcomeEmail = () => {
  return (
    <Html>
      <Preview>Welcome user</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-2xl">Hello World</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default WelcomeEmail;
