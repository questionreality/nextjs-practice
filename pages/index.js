import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import DataContext from "../util/Context";
import Post from "../components/Post";
import Modal from "react-modal";

const customStyles = {
  // content: {
  //   top: "50%",
  //   left: "50%",
  //   right: "auto",
  //   bottom: "auto",
  //   marginRight: "-50%",
  //   transform: "translate(-50%, -50%)",
  // },
  layout: {
    backgroundColor: "#2f6e99",
    opacity: 0.5,
  },
};

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
    <div className="relative h-screen w-screen">
      <Head>
        <title>Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {posts?.map((post) => {
          console.log(post);
          return (
            <div
              key={post.id}
              className="bg-gray-100 m-4 py-4 rounded-md shadow-md"
            >
              <Link href={`/?id=${post.id}`} as={`/posts/${post.id}`}>
                <a className="text-primary-900 px-6 font-medium inline-block">
                  {post.title}
                </a>
              </Link>
            </div>
          );
        })}
      </main>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="h-screen bg-primary-100 md:w-1/2  mx-auto relative md:mt-20 sm:mt-10  sm:h-auto  outline-none shadow-md rounded-sm p-4 overflow-hidden transition-all duration-300"
      >
        <Post postId={router.query.id} />
        <button
          onClick={closeModal}
          className="absolute top-0 right-1 outline-none transition-all duration-300 text-gray-600 hover:text-red-700 text-lg focus:outline-none"
        >
          &#x02717;
        </button>
      </Modal>
    </div>
  );
}
