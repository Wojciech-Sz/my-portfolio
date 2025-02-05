import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message?: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  const previewText = `New message from: ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New message</Heading>
          <Text style={text}>Dane kontaktowe:</Text>

          <Section style={section}>
            <Text style={label}>Imię:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>{message ? "Wiadomość:" : "Data:"}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>Wiadomość wysłana ze strony domanowscy.pl</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "hsl(30, 3%, 89%)",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const h1 = {
  color: "hsl(30, 15%, 20%)",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "17px 0 0",
  textAlign: "center" as const,
};

const text = {
  color: "hsl(30, 15%, 20%)",
  fontSize: "20px",
  fontWeight: "bold",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const section = {
  padding: "10px 0",
};

const label = {
  color: "hsl(26, 35%, 15%)",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0",
};

const value = {
  color: "hsl(30, 15%, 20%)",
  fontSize: "16px",
  margin: "0",
};

const hr = {
  borderColor: "hsl(26, 5%, 74%)",
  margin: "20px 0",
};

const footer = {
  color: "hsl(30, 15%, 20%)",
  fontSize: "12px",
  fontStyle: "italic",
  textAlign: "center" as const,
};
