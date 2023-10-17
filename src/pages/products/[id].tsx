import Head from "next/head";
import { useState } from "react";

const IndexPage = ({ data }: any) => {
  const [vals, setDtata] = useState(data);
  console.log("vals: ", vals);
  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  const shareViaTwitter = () => {
    const postText = `🌟 Discover interesting content and connect with like-minded people on GetAI! Check out this post. 🌐 #getAiLife #DiscoverMore`;

    const text = encodeURIComponent(postText);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=https://next-js-test-4hzu-q8pdnl6rw-akshat-018s-projects.vercel.app/products/1`,
      "_blank"
    );
  };
  return (
    <>
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://next-js-test-4hzu-q8pdnl6rw-akshat-018s-projects.vercel.app/products/1"
        />
        <meta name="twitter:title" content={vals.carts[0].products[0].title} />
        <meta
          name="twitter:description"
          content={vals.carts[0].products[0].price}
        />
        <meta name="twitter:image" content={vals.carts[0].products[0].total} />{" "}
      </Head>
      <button onClick={shareViaTwitter}>Post Twitter</button>
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
