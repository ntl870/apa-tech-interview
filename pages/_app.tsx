import type { AppProps } from "next/app";
import { getGameCategories } from "../api/games";
import Layout from "../components/Layout";
import { GetGameCategoryResponse } from "../api/games/types";
import { NextPage } from "next";

interface Props {
  categories: GetGameCategoryResponse;
}

export async function getStaticProps() {
  const categories = await getGameCategories();
  return {
    props: { categories },
  };
}

const MyApp = ({ Component, pageProps }: AppProps<Props>) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
