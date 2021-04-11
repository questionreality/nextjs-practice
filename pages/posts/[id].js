import { useRouter } from "next/router";
import Post from "../../components/Post";

export default function PostModal() {
  const router = useRouter();
  const postId = router.query.id;
  //accessing postId from the query params
  return <Post postId={postId} />;
}
