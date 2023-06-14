import React from "react";

import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/nextjs-is-agreat-framework">
          NextJS is a Great Framework
        </Link>
        <Link>Something else</Link>
      </ul>
    </>
  );
};

export default NewsPage;
