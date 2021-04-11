import { useContext } from "react";
import DataContext from "../util/Context";
import useSWR from "swr";

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
      {" "}
      {data.name} {catchPhrase} {title} {body}
    </div>
  );
}
