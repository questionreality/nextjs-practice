import DataContext from "../util/Context";
import "tailwindcss/tailwind.css";
import "../tailwind-before.css";
import "../index.css";
import "../tailwind-after.css";

function MyApp(props) {
  console.log(props);
  const { Component, pageProps, posts } = props;
  console.log(posts);
  return (
    <DataContext.Provider value={posts}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

MyApp.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    posts: data,
  };
};
export default MyApp;
