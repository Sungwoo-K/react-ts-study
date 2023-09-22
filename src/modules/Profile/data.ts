import useSWR from "swr";

export interface ProfileData {
  nickname: string;
  email: string;
}

export function usePorfileData() {
  const { data: profileData, mutate: mutateProfileData } = useSWR<ProfileData>(
    "@data/profile",
    { fallbackData: { nickname: "Alice", email: "alice@gmail.com" } }
  );

  return { profileData, mutateProfileData };
}
