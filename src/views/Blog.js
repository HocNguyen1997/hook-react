import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useNavigate } from "react-router-dom";
const Blog = () => {
  let navigate = useNavigate();
  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);
  let newData = [];
  if (dataBlog && dataBlog.length > 0) {
    newData = dataBlog.slice(0, 9);
    console.log(">> check data blog", newData);
  }
  const handleAddNew = () => {
    navigate("/add-new-blog");
  };
  return (
    <>
      <div>
        <button className="btn-add-new" onClick={handleAddNew}>
          + Add new blog
        </button>
      </div>
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">Title: {item.title}</div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View detail</Link>
                </button>
              </div>
            );
          })}
        {isLoading === true && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading data...
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
