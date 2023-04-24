import {
  User,
  getAuth,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import { app } from "./firebase";
import { atom, useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

type UserState = User | null;

//認証するユーザを保持するRecoilの状態
//ユーザがログインしている場合はUser,ログインしていない場合はnull
const UserState = atom<UserState>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
});

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};

//ユーザー認証を監視
export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true)
  const setUser = useSetRecoilState(UserState)

  useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser])

  return isLoading;
}

//userState を他のコンポーネントで呼び出すための関数
export const useUser = () => {
  return useRecoilValue(UserState);
}



// dangerouslyAllowMutability 調べたけどよくわからない