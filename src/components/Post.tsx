import { MutableRefObject, useEffect, useRef, useState } from "react";

const Post = () => {
  const [postList, setPostList] = useState<string[]>([]);

  const postInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleAddPost = () => {
    setPostList([...postList, postInputRef.current.value]);
  };

  useEffect(() => console.log(postList), [postList]);

  return (
    <div>
      <h1>게시판</h1>
      <input ref={postInputRef} />
      <button onClick={handleAddPost}>추가</button>
    </div>
  );
};

export default Post;
