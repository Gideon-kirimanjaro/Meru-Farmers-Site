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
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[newDate.getMonth()];

    const day = newDate.getDate();
    return { day, month, year };
  };
  const trimExcerpt = (excerpt) => {
    if (excerpt.length > 20) {
      const trimmedExcerpt = excerpt.substring(0, 120);
      return trimmedExcerpt;
    } else {
      return excerpt;
    }
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
        trimExcerpt: trimExcerpt,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
