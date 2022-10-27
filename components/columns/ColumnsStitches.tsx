import { Box } from "../styledComponents/Box";
import { Heading } from "../styledComponents/Heading";
import { Text } from "../styledComponents/Text";

export const ColumnsStitches = () => {
  return (
    <Box
      css={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading>Stitches</Heading>
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1500px",
          padding: "20px",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Box variant={"textBox"}>
          <Heading as={"h2"}>Text box</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            expedita officia molestias corporis adipisci alias enim earum omnis
            veritatis eum mollitia minima amet nostrum cumque reiciendis, nisi
            tempore, nesciunt dolor voluptas consectetur est laudantium, sunt
            excepturi. Maiores pariatur culpa eveniet minima vero suscipit
            omnis. Nemo ipsa praesentium, nobis assumenda earum, deleniti non
            perspiciatis in amet placeat et voluptates iste omnis vel,
            doloremque reprehenderit cum repudiandae id laudantium aliquam est
            aspernatur recusandae! Hic, sit? Quasi saepe officiis fugit, ab sint
            unde? Nesciunt tempore fugit vel quis expedita quos quia reiciendis,
            ad ipsum eveniet, sit deserunt necessitatibus quod iure repellendus
            magni. Nesciunt?
          </Text>
        </Box>
        <Box variant={"textBox"}>
          <Heading as={"h2"}>Text box</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            expedita officia molestias corporis adipisci alias enim earum omnis
            veritatis eum mollitia minima amet nostrum cumque reiciendis, nisi
            tempore, nesciunt dolor voluptas consectetur est laudantium, sunt
            excepturi. Maiores pariatur culpa eveniet minima vero suscipit
            omnis. Nemo ipsa praesentium, nobis assumenda earum, deleniti non
            perspiciatis in amet placeat et voluptates iste omnis vel,
            doloremque reprehenderit cum repudiandae id laudantium aliquam est
            aspernatur recusandae! Hic, sit? Quasi saepe officiis fugit, ab sint
            unde? Nesciunt tempore fugit vel quis expedita quos quia reiciendis,
            ad ipsum eveniet, sit deserunt necessitatibus quod iure repellendus
            magni. Nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reprehenderit temporibus impedit id, libero nesciunt
            perspiciatis dolor beatae.
          </Text>
        </Box>
        <Box variant={"textBox"}>
          <Heading as={"h2"}>Text box</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            expedita officia molestias corporis adipisci alias enim earum omnis
            veritatis eum mollitia minima amet nostrum cumque reiciendis, nisi
            tempore, nesciunt dolor voluptas consectetur est laudantium, sunt
            excepturi. Maiores pariatur culpa eveniet minima vero suscipit
            omnis. Nemo ipsa praesentium, nobis assumenda earum, deleniti non
            perspiciatis in amet placeat et voluptates iste omnis vel,
            doloremque reprehenderit cum repudiandae id laudantium aliquam est
            aspernatur recusandae! Hic, sit? Quasi saepe officiis fugit, ab sint
            unde? Nesciunt tempore fugit vel quis expedita quos quia reiciendis,
            ad ipsum eveniet, sit deserunt necessitatibus quod iure repellendus
            magni. Nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates tenetur voluptatem earum ut consectetur dolor,
            possimus, neque quae nihil exercitationem corrupti. Officia nisi
            asperiores minima minus sequi esse cum.
          </Text>
        </Box>
        <Box variant={"textBox"}>
          <Heading as={"h2"}>Text box</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
            expedita officia molestias corporis adipisci alias enim earum omnis
            veritatis eum mollitia minima amet nostrum cumque reiciendis, nisi
            tempore, nesciunt dolor voluptas consectetur est laudantium, sunt
            excepturi. Maiores pariatur culpa eveniet minima vero suscipit
            omnis. Nemo ipsa praesentium, nobis assumenda earum, deleniti non
            perspiciatis in amet placeat et voluptates iste omnis vel,
            doloremque reprehenderit cum repudiandae id laudantium aliquam est
            aspernatur recusandae! Hic, sit? Quasi saepe officiis fugit, ab sint
            unde? Nesciunt tempore fugit vel quis expedita quos quia reiciendis,
            ad ipsum eveniet, sit deserunt necessitatibus quod iure repellendus
            magni. Nesciunt? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Excepturi, officiis?
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
