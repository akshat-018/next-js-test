import Head from "next/head";
import { useState } from "react";

const IndexPage = ({ data }: any) => {
  const [vals, setDtata] = useState(data);
  console.log("vals: ", vals);
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <meta name="twitter:title" content={vals.carts[0].products[0].title} />
        <meta
          name="twitter:description"
          content={vals.carts[0].products[0].price}
        />
        <meta name="twitter:image" content={vals.carts[0].products[0].total} />{" "}
      </Head>
      <div>
        {vals.carts.map((data: any) => (
          <h1 key={data.id}>{data.id}</h1>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://dummyjson.com/carts");
  const users = await response.json();
  return {
    props: {
      data: users,
    },
  };
}

export default IndexPage;
