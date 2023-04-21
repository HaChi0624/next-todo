//Todo一覧表示ページ
import { db } from "../../lib/firebase";
import {
  doc,
  getDocs,
  addDoc,
  collection,
  deleteDoc,
  SnapshotOptions,
} from "firebase/firestore";
import { Todo } from "../../types/todoType";
import {
  Box,
  Button,
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
  color,
} from "@chakra-ui/react";
import { FC } from "react";
import { useTodoList } from "@/hooks/useTodo";

export const TodoList = () => {
  const { todos, deleteTodo } = useTodoList();

  return (
    <VStack>
      <Box textAlign="center">Todo一覧</Box>
      <Tabs>
        <TabList>
          <Tab>全て</Tab>
          <Tab>未完了</Tab>
          <Tab>完了</Tab>
        </TabList>
      </Tabs>
      <TableContainer width="90%" margin="0 auto">
        <Table variant="simple">
          <TableCaption>説明は特になし</TableCaption>
          <Thead>
            <Tr backgroundColor="gray.200">
              <Th>(ステータス)</Th>
              <Th>(件名)</Th>
              <Th>(内容)</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <Td className="tdStyle">
                  {todo.isDone === false ? (
                    <Box color="red">未完了</Box>
                  ) : (
                    <Box color="blue">完了</Box>
                  )}
                </Td>
                <Td>{todo.title}</Td>
                <Td>{todo.content}</Td>
                <Td>
                  <Button>編集</Button>
                  <Button onClick={deleteTodo}>削除</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr backgroundColor="gray.200">
              <Th>(件名)</Th>
              <Th>(内容)</Th>
              <Th>(ステータス)</Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  );
};

//まだ形だけ
//tab切り替えでページ遷移になる？
//完了未完了のスタイルを無理やりboxに入れてやったけどましな方法はないのか
//編集ボタン内に削除ボタンを置く

//参考
//https://qiita.com/kashimuuuuu/items/0cc99820d120aae473fe#%E6%BA%96%E5%82%99firebase%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B
