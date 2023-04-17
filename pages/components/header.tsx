import { Box, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex bg='tomato' w='100%' p={4} color='white'>
      <Box fontWeight={"bold"} fontSize="3xl">todo</Box>
      <Spacer />
      <Link href="/posts/signUp">ユーザー登録</Link>
    </Flex>
  );
}

//ログインリンク
//ハンバーガーメニュー