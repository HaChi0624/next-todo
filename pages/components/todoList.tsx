//Todo一覧表示ページ
import { db } from "../../lib/firebase";
import { doc, getDocs, addDoc, collection, deleteDoc } from 'firebase/firestore';
import { Todo } from '../../types/todoType'
import {
  Box,
  Tab,
  TabList,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";



export const TodoList = () => {
  const [title, setTitle] = useState<string>('')


  return (
    <VStack>
      <Box textAlign="center">Todo一覧</Box>
      <Tabs>
        <TabList>
          <Tab>全て</Tab>
          <Tab>未完了</Tab>
          <Tab>完了</Tab>
          <Tab>削除済み</Tab>
        </TabList>
      </Tabs>
      <TableContainer width="90%" margin="0 auto">
        <Table variant="simple">
          <TableCaption>説明は特になし</TableCaption>
          <Thead>
            <Tr backgroundColor="gray.200">
              <Th>(件名)</Th>
              <Th>(内容)</Th>
              <Th>(ステータス)</Th>
              <Th>(備考)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>ログイン・ログアウト機能実装</Td>
              <Td></Td>
              <Td>未完了</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>firestoreの設定 or recoil</Td>
              <Td>めんどくさそう</Td>
              <Td>未完了</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td>未完了</Td>
              <Td></Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr backgroundColor="gray.200">
              <Th>(件名)</Th>
              <Th>(内容)</Th>
              <Th>(ステータス)</Th>
              <Th>(備考)</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  );
};

//まだ形だけ
//tab切り替えでページ遷移になる？

//参考
//https://qiita.com/kashimuuuuu/items/0cc99820d120aae473fe#%E6%BA%96%E5%82%99firebase%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B