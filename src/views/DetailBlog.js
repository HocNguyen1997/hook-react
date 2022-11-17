import { useParams, useNavigate } from "react-router-dom";

const DetailBlog = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const handleBackData = () => {
    navigate('/blog');
  }
  return (
    <>
      <div><span onClick={handleBackData}>&lt;-- Back</span></div>
      <h1>Detail Blog {id}</h1>
    </>
  );
};
export default DetailBlog;
