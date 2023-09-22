import { MutableRefObject, useRef } from "react";
import { usePorfileData } from "../data";

const ProfileEdit = () => {
  const nicknameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { profileData, mutateProfileData } = usePorfileData();

  const handleEdit = () => {
    mutateProfileData({
      nickname: nicknameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div>
      <input ref={nicknameRef} />
      <input ref={emailRef} />
      <button onClick={handleEdit}>save</button>
    </div>
  );
};

export default ProfileEdit;
