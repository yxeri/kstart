import { NextPage } from "next";
import { MyAccordion } from "../components/accordion/MyAccordion";
import { Box } from "../components/styledComponents/Box";

const RadixAccordion: NextPage = () => {
  return (
    <div>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "60px",
        }}
      >
        <MyAccordion />
      </Box>
    </div>
  );
};

export default RadixAccordion;
