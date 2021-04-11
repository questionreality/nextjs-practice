import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import DataContext from "../util/Context";
import Post from "../components/Post";
import Modal from "react-modal";

Modal.setAppElement("#__next");
//hooking to the DOM element

export default function Home() {
  const posts = useContext(DataContext);
  const router = useRouter();

  return (
    <>
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
                  className="bg-gray-100 m-4 py-4 rounded-md shadow-md md:m-6"
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
          isOpen={!!router.query.id}
          onRequestClose={() => router.push("/")}
          className="h-screen w-screen bg-primary-100 outline-none shadow-md mx-auto rounded-sm sm:w-3/4 relative sm:mt-10  sm:h-auto "
        >
          <Post postId={router.query.id} />
          <button
            onClick={() => router.push("/")}
            className="absolute top-3 right-1 outline-none  text-lg transition-all duration-300 text-gray-600 hover:text-red-700  focus:outline-none"
            //positioning the button in top right hand corner
          >
            &#x02717;
          </button>
        </Modal>
      }
    </>
  );
}
