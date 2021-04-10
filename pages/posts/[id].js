import { useContext } from "react";
import { useRouter } from "next/router";
import DataContext from "../../util/Context";
import useSWR from "swr";
const fetchUserData = async (userId) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((response) => response.json());

export default function PostModal() {
  const router = useRouter();
  const postId = router.query.id;
  const posts = useContext(DataContext);
  const userId = posts.filter((post) => String(post.id) === postId)[0].userId;
  const { data, error } = useSWR(userId, fetchUserData);
  console.log(posts);

  if (error) return <div>Please try again</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return <div>Hi {data.name}</div>;
}
