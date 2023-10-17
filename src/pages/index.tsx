import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // TODO: Render the appropriate page component based on the current route
      // const pageComponent = require(`./${router.pathname}/page.tsx`).default;
      // render(pageComponent, document.querySelector("#root"));
      // router.push();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div>
      <h1>Home</h1>
      <Link href={"/products"}>navigate to products</Link>
    </div>
  );
}
