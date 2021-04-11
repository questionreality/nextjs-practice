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
        <div className="relative">
          <Image src={"/default.png"} layout="fill" objectFit="cover" />
        </div>
        <div>
          <span>{name}</span>
          <span>{catchPhrase}</span>
        </div>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}
