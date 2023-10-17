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
      `https://twitter.com/intent/tweet?text=${text}&url=https://next-js-test-4hzu.vercel.app/products/1`,
      "_blank"
    );
  };
  return (
    <>
      <Head>
        <title>Get AI Life: Explore AI Tools, Connect, and Stay Informed</title>
        <meta
          name="title"
          content="Get AI Life: Explore AI Tools, Connect, and Stay Informed"
        />
        <meta
          name="keywords"
          content="AI Tools, Artificial Intelligence, AI News, AI Research, Social Connect, AI Community, Explore AI, Learn AI"
        />
        <meta
          property="og:description"
          content="Welcome to Get AI Life, your go-to platform to explore a diverse range of AI tools, connect with like-minded enthusiasts, and stay up-to-date with the latest AI news and research. Discover innovative solutions, engage in meaningful conversations, and delve into the world of artificial intelligence with us!"
        />
        <meta property="og:image" content="1" />
        <meta property="og:title" content="Get AI Life" />
        <meta property="og:type" content="website"></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://next-js-test-4hzu.vercel.app/products/1"
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
