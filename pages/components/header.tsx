import { Flex, HStack, Link } from "@chakra-ui/react";


export const Header = () => {
  return (
    <Flex bg="tomato" w="100%" p={4} color="white">
      <Link href="/" fontWeight={"bold"} fontSize="3xl">
        opof
      </Link>
      <HStack width='500' margin="0 0 0 auto">
        <Link href="/posts/signUp">登録</Link>
        <Link href="/posts/authentication">認証</Link>
      </HStack>
    </Flex>
  );
};

//ログインリンク
//ハンバーガーメニュー
