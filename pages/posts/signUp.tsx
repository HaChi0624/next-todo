// ユーザー登録ページ
import { FormEvent, useState } from "react";
import router from "next/router";
import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { Header } from "../components/header";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <>
      <Header />
      <Box width='40%' margin='0 auto' paddingTop='100'>
        <Text fontSize='3xl' marginBottom='3'>ユーザ登録</Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChangeEmail}
            />
          </FormControl>
          <FormControl>
            <FormLabel>パスワード</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChangePassword}
            />
          </FormControl>
          <Box marginTop='3'>
            <Button onClick={() => alert("登録されました")}>登録</Button>
          </Box>
        </form>
        {/* <Button onClick={() => router.push("/")}>todoリストへ</Button> */}
      </Box>
    </>
  );
};

export default SignUp;

//やりたいこと
//登録が済んだらtodoへ
//既に登録されている場合の処理
// ページ遷移にするか、モーダルにするか

// 悩んだこと
//export defaultにしないとページ遷移できなかった
