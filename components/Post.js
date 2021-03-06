import { useContext } from "react";
import DataContext from "../util/Context";
import useSWR from "swr";
import Loader from "react-loader-spinner";

const fetchUserData = async (userId) =>
  await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((response) => response.json());

export default function Post({ postId }) {
  if (!postId) return <></>;
  const posts = useContext(DataContext);
  //get post associated with the id
  const post = posts.filter((post) => String(post.id) === postId)[0];
  const userId = post.userId;
  //stale-while-revalidate
  const { data, error } = useSWR(userId, fetchUserData);

  if (error) return <div>Please try again</div>;
  if (!data)
    //loading state
    return (
      <div className="flex py-4">
        <Loader
          type="Circles"
          color="#3e92cc"
          height={250}
          width={250}
          className="mx-auto"
        />
      </div>
    );
  //destructuring
  const {
    name,
    company: { catchPhrase },
  } = data;
  const { title, body } = post;
  return (
    <div className="p-4">
      <div>
        <h1 className="font-medium text-gray-800 text-lg">{title}</h1>
        <p className="text-gray-700 mt-2">{body}</p>
      </div>
      <div>
        <a
          href="/"
          className="text-md  mt-4 border-b-4 border-primary-600 inline-block transition-all duration-300 cursor-pointer rounded-sm leading-3 pt-1  hover:text-white hover:bg-primary-600"
        >
          {name}
        </a>
        <span className="text-gray-500 block mt-2 text-sm">
          "{catchPhrase}"
        </span>
      </div>
    </div>
  );
}
