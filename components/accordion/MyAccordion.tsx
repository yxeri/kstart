import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
import { Heading } from "../styledComponents/Heading";

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});
const AccordionRoot = styled(Accordion.Root, {
  background: "$backgroundSecondary",
  padding: "20px",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
});

const AccordionItem = styled(Accordion.Item, {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const AccordionTrigger = styled(Accordion.Trigger, {
  width: "220px",
  background: "$background",
  borderRadius: "30px",
  color: "$text",
  border: "2px solid gray",
  cursor: "pointer",
});

const AccordionHeader = styled(Accordion.Header, {
  borderRadius: "30px",
});

const AccordionContent = styled(Accordion.Content, {
  overflow: "hidden",
  '&[data-state="open"]': { animation: `${open} 300ms ease-in` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-in` },
});

export const MyAccordion = () => {
  return (
    <AccordionRoot type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>
            <Heading as="h2" css={{ fontFamily: "sans-serif" }}>
              Im Open!
            </Heading>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <Heading
            as="h2"
            css={{ color: "$primary", fontFamily: "sans-serif" }}
          >
            Hello!
          </Heading>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>
            <Heading as="h2" css={{ fontFamily: "sans-serif" }}>
              Click Me!
            </Heading>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <Heading
            as="h2"
            css={{ color: "$primary", fontFamily: "sans-serif" }}
          >
            Hello again!
          </Heading>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader>
          <AccordionTrigger>
            <Heading as="h2" css={{ fontFamily: "sans-serif" }}>
              Click Me Too!
            </Heading>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <Heading
            as="h2"
            css={{ color: "$primary", fontFamily: "sans-serif" }}
          >
            Party!
          </Heading>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};
