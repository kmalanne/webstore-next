import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Layout } from "@components/common";
import s from "../styles/Home.module.css";

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {
      products: {},
    },
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div>TODO</div>
    </>
  );
}

Home.Layout = Layout;
