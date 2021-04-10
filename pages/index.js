import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import DataContext from "../util/Context";
import Posts from "../components/Posts";
import styles from "../styles/Home.module.css";

export default function Home() {
  const posts = useContext(DataContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts?.map((post) => {
          console.log(post);
          return (
            <div key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}
