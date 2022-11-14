import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import HomeComponent from "../Components/Home/HomeComponent";
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, width=device-width"
        />
      </Head>
      <HomeComponent />
    </div>
  );
}
