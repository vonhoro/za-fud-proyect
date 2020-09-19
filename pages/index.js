import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../containers/NavBar";
import { PublicityPoi } from "../containers/PublicityPoi";
import { MealList } from "../containers/MealList";
const lista = Array.from(
  Array(100).map((_, index) => {
    index;
  })
);
export default function Home() {
  return (
    <>
      <Head>
        <title>Za fud Proyect</title>
      </Head>
      <NavBar />
      <PublicityPoi />
      <MealList />
      { 
         lista.map((item, index) => (
        <h1>lol</h1>
      )) }
    </>
  );
}
