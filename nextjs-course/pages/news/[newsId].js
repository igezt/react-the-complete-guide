import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const id = router.query.newsId;

  return <div>{id}</div>;
};

export default DetailPage;
