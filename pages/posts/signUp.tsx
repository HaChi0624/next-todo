// ユーザー登録ページ
import { FormEvent, useState } from "react";
import router from "next/router";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../lib/firebase";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/");
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <FormControl>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <FormLabel>パスワード</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <Button onClick={() => alert("登録されました")}>登録</Button>
        </div>
      </form>
      <Button onClick={() => router.push("/")}>todoリストへ</Button>
    </FormControl>
  );
};

export default SignUp;

//やりたいこと
//登録が済んだらtodoへ
//既に登録されている場合の処理
// ページ遷移にするか、モーダルにするか


// 悩んだこと
//export defaultにしないとページ遷移できなかった