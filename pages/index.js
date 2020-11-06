import Head from "next/head";
import { Faq } from "../components/Faq"
import { NavBar } from "../containers/NavBar";
import { PublicityPoi } from "../containers/PublicityPoi";
import { MealList } from "../containers/MealList";
import { useQuery, gql, from } from "@apollo/client";
import { Box } from "@chakra-ui/core";
const CHECK_USER = gql`
  query Me {
    me {
      user
      userId
      welcome
    }
  }
`;

const lista = Array.from(
  Array(100).map((_, index) => {
    index;
  })
);
export default function Home() {
  const { loading, error, data } = useQuery(CHECK_USER);
  let check = null;
  console.log(data?.me);
  return (
    <>
      <Head>
        <title>Za fud Proyect</title>
      </Head>
      <NavBar UserData={data?.me} />

      <PublicityPoi />
      <MealList />
      {
        // lista.map((item, index) => (
        // <h1>lol</h1>
        // ))
      }
      <Box
        width="100%"
        height="100%"
        border="1px solid"
        backgroundColor="rgba(0, 0, 0, 1)"
      >
        <Faq />
      </Box>
    </>
  );
}
