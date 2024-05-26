import React from "react";

import { getBlogPostList } from "@/helpers/file-helpers";
import SummaryCard from "@/components/SummaryCard";

import styles from "./projects.module.css";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Projects:</h1>

      {blogPosts.map(({ slug, ...delegated }) => (
        <SummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
