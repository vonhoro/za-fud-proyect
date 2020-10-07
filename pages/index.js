import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../containers/NavBar";
import { PublicityPoi } from "../containers/PublicityPoi";
import { MealList } from "../containers/MealList";
import { useQuery, gql } from "@apollo/client";
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
    </>
  );
}
