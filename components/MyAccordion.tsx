import * as Accordion from "@radix-ui/react-accordion";
import { styled } from "@stitches/react";
export const MyAccordion = () => {
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
    border: "3px solid black",
    borderRadius: "30px",
  });

  const AccordionHeader = styled(Accordion.Header, {
    borderRadius: "30px",
  });

  const AccordionContent = styled(Accordion.Content, {});
  return (
    <>
      <AccordionRoot type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>
              <h2>Im Open!</h2>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <span>Hello!</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>
            <AccordionTrigger>
              <h2>Click Me!</h2>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <span>Hello Again!</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>
            <AccordionTrigger>
              <h2>Click Me Too!</h2>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <span>Party!</span>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </>
  );
};
