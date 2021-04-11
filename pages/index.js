import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import DataContext from "../util/Context";
import Post from "../components/Post";
import Modal from "react-modal";

// const customStyles = {
//   // content: {
//   //   top: "50%",
//   //   left: "50%",
//   //   right: "auto",
//   //   bottom: "auto",
//   //   marginRight: "-50%",
//   //   transform: "translate(-50%, -50%)",
//   // },
//   layout: {
//     backgroundColor: "#2f6e99",
//     opacity: 0.5,
//   },
// };

Modal.setAppElement("#__next");

export default function Home() {
  // const [modalOpen, setModalOpen] = useState(false);
  const posts = useContext(DataContext);
  const router = useRouter();
  // useEffect(() => {
  //   if (!!router.query.id) setModalOpen(true);
  //   else setModalOpen(false);
  // }, [router.query]);
  // const closeModal = () => {
  //   router.push("/");
  //   setModalOpen(false);
  // };
  return (
    <div className="relative ">
      <Head>
        <title>Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {posts?.map((post) => {
          console.log(post);
          return (
            <Link href={`/?id=${post.id}`} as={`/posts/${post.id}`}>
              <a>
                <div
                  key={post.id}
                  className="bg-gray-100 m-4 md:m-6 py-4 rounded-md shadow-md"
                >
                  <span className="text-primary-900 px-6 font-medium inline-block">
                    {post.title}
                  </span>
                </div>
              </a>
            </Link>
          );
        })}
      </main>
      {
        <Modal
          // isOpen={modalOpen}
          // onRequestClose={closeModal}
          // style={customStyles}
          isOpen={!!router.query.id}
          onRequestClose={() => router.push("/")}
          className="h-screen w-screen bg-primary-100 sm:w-3/4 mx-auto  relative sm:mt-10  sm:h-auto  outline-none shadow-md rounded-sm"
        >
          <Post postId={router.query.id} />
          <button
            onClick={() => router.push("/")}
            className="absolute top-3 right-1 outline-none transition-all duration-300 text-gray-600 hover:text-red-700 text-lg focus:outline-none"
          >
            &#x02717;
          </button>
        </Modal>
      }
    </div>
  );
}
