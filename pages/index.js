import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import DataContext from "../util/Context";
import Post from "../components/Post";
import Modal from "react-modal";

import styles from "../styles/Home.module.css";

Modal.setAppElement("#__next");

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const posts = useContext(DataContext);
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) setModalOpen(true);
  }, [router.query]);
  const closeModal = () => {
    setModalOpen(false);
    router.push("/");
  };
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
              <Link href={`/?id=${post.id}`} as={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </div>
          );
        })}
      </main>
      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <Post postId={router.query.id} />
      </Modal>
    </div>
  );
}
