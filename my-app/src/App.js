import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchContent } from "./redux/slice/contentSlice";
import { fetchComment } from "./redux/slice/commentSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchComment());
  // }, dispatch);
  function handleOnClick(postId) {
    dispatch(fetchComment(postId));
  }
  const isCommentLoading = useSelector((state) => state.comment.contents);
  console.log("isCommentLoad", isCommentLoading);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);
  const comments = useSelector((state) => state.comment.comments);

  console.log("thjis", comments);

  if (isLoading) {
    return "Loading....";
  }
  if (error) {
    return error;
  }

  return (
    <div className="App">
      {contents.map((content) => (
        <div key={content.id} className="api-content">
          <h4 className="post-title">{content.id}</h4>
          <h4 className="post-title">{content.title}</h4>
          <p className="post-body">{content.body}</p>
          <button onClick={() => handleOnClick(content.id)}>Comment</button>

          {comments[content.id]?.map((comment) => {
            if (comment.postId === content.id) {
              return( <div>
                <p>{comment.name}</p>
               <p>{comment.email}</p>
               <p>{comment.body}</p>
              </div>)}

          })}


{/* {comments[content.id]?.map((comment) => {
            if (comment.postId === content.id) {
              return( <div>
                <p>{comment.name}</p>
               <p>{comment.email}</p>
               <p>{comment.body}</p>
              </div>)}

          })} */}
        </div>
      ))}
    </div>
  );
}

export default App;
