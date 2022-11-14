import { createContext, useState } from "react";

const BlogContext = createContext({
  blogsData: [],
  setBlogs: null,
  blogTags: null,
  tagName: null,
  tagColor: null,
  date: null,
});
export default BlogContext;
export const ContextProvider = (props) => {
  const [blogsData, setBlogs] = useState([]);
  ///------------------------------NAME
  const blogTags = blogsData.map((item) => {
    return item;
  });
  const [] = blogTags;
  ///------------------------------color
  const tagName = (blogDetails) => {
    const { tags } = blogDetails;
    if (tags.length === 0) {
      return "blog";
    } else {
      return tags[0].name;
    }
  };
  const tagColor = (blogDetails) => {
    const { tags } = blogDetails;
    if (tags.length === 0) {
      return "pink";
    } else {
      return tags[0].accent_color;
    }
  };

  const date = (d) => {
    const newDate = new Date(d);
    const year = newDate.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[newDate.getMonth()];
    const day = newDate.getDate();
    return { day, month, year };
  };
  return (
    <BlogContext.Provider
      value={{
        blogsData: blogsData,
        setBlogs: setBlogs,
        blogTags: blogTags,
        tagName: tagName,
        tagColor: tagColor,
        date: date,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
