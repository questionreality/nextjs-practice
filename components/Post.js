import { useContext } from "react";
import DataContext from "../util/Context";
import useSWR from "swr";
import Image from "next/image";

const fetchUserData = async (userId) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((response) => response.json());

export default function Post({ postId }) {
  const posts = useContext(DataContext);
  const post = posts.filter((post) => String(post.id) === postId)[0];
  const userId = post.userId;
  const { data, error } = useSWR(userId, fetchUserData);
  console.log(posts);

  if (error) return <div>Please try again</div>;
  if (!data) return <div>Loading...</div>;
  const {
    name,
    company: { catchPhrase },
  } = data;
  const { title, body } = post;
  return (
    <div>
      <div>
        <h1 className="font-medium text-gray-800 text-lg">{title}</h1>
        <p className="text-gray-700 mt-2">{body}</p>
      </div>
      <div>
        {/* <div className="relative w-5 h-5 object-cover">
          <Image src={"/default.png"} layout="fill" objectFit="cover" />
        </div> */}

        <span className="text-md  mt-4 border-b-4 border-primary-500 inline-block ">
          {name}
        </span>

        <span className="text-gray-500 block mt-2 text-sm">
          "{catchPhrase}"
        </span>
      </div>
    </div>
  );
}
