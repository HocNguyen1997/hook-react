import "./Blog.scss";
import { useState } from "react";
const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    console.log("Check data state: ", title, content);
  };
  return (
    <div className="add-new-container">
      <div className="text-add-new">----ADD NEW BLOG----</div>
      <div className="inputs-data">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputs-data">
        <label>Content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="btn-add-new" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
export default AddNewBlog;
