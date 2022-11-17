import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";

const DetailBlog = () => {
  let { id } = useParams();
  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
  let navigate = useNavigate();
  const handleBackData = () => {
    navigate("/blog");
  };
  return (
    <>
      <div>
        <span onClick={handleBackData}>&lt;-- Back</span>
        <div className="blog-detail">
          {dataBlogDetail && (
            <>
              <div className="title">
                Blog ID: {id} -{" "}
                {isLoading === true ? "Loading..." : dataBlogDetail.title}
              </div>
              <div className="content">{dataBlogDetail.body}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default DetailBlog;
