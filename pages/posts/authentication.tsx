import Head from "next/head";
import { useUser, login, logout } from "../../lib/auth";
import { NextPage } from "next/types";
import { Header } from "../components/header";
import { Button } from "@chakra-ui/react";

const Authentication: NextPage = () => {
  const user = useUser();

  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };

  return (
    <div>
      <Header />
      <Head>
        <title>Auth Example</title>
      </Head>

      <div>
        <h1>ユーザー認証</h1>
        {user !== null ? (
          <>
            <h2>ログインしている</h2>
            <Button onClick={handleLogout}>ログアウト</Button>
          </>
        ) : (
          <>
            <h2>ログインしていない</h2>
            <Button onClick={handleLogin}>ログイン</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Authentication;

//ログインの入力フォームを用意していない