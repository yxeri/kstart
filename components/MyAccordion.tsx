import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
export const MyAccordion = () => {
  const open = keyframes({
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
  });

  const close = keyframes({
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
  });
  const AccordionRoot = styled(Accordion.Root, {
    background:
      "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(7,78,76,1) 100%)",
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
    background: "transparent",
    //border: "3px solid black",
    borderRadius: "30px",
  });

  const AccordionHeader = styled(Accordion.Header, {
    borderRadius: "30px",
  });

  const AccordionContent = styled(Accordion.Content, {
    overflow: "hidden",
    '&[data-state="open"]': { animation: `${open} 300ms ease-in` },
    '&[data-state="closed"]': { animation: `${close} 300ms ease-in` },
  });
  return (
    <>
      <AccordionRoot type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger css={{ border: "3px solid #041b32" }}>
              <h2>Im Open!</h2>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Hello!</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>
            <AccordionTrigger css={{ border: "3px solid #052838" }}>
              <h2>Click Me!</h2>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Hello Again!</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>
            <AccordionTrigger css={{ border: "3px solid #063c43" }}>
              <h2>Click Me Too!</h2>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Party!</p>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </>
  );
};
