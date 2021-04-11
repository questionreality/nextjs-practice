import DataContext from "../util/Context";
//this order is to improve development experience
import "tailwindcss/tailwind.css";
import "../tailwind-before.css";
import "../index.css";
import "../tailwind-after.css";

function MyApp(props) {
  const { Component, pageProps, posts } = props;
  return (
    //providing access to posts to all components
    <DataContext.Provider value={posts}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}
//sharing data across components.
MyApp.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    posts: data,
  };
};
export default MyApp;
