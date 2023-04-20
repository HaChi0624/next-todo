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
import { useEffect, useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  //データの取得
  useEffect(() => {
    const todoData = collection(db, "todos");
    getDocs(todoData).then((snapshot) => {
      const todoList: Todo[] = [];
      snapshot.docs.map((doc) => {
        const todo: Todo = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          isDone: doc.data().isDone,
        };
        todoList.push(todo);
      });
      // console.log(snapshot.docs.map((doc) => ({...doc.data()})))
      setTodos(todoList);
    });
  }, []);

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
              <Th>(ステータス)</Th>
              <Th>(件名)</Th>
              <Th>(内容)</Th>
              <Th>(備考)</Th>
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
                <Td></Td>
              </Tr>
            ))}
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
//完了未完了のスタイルを無理やりboxに入れてやったけどましな方法はないのか

//参考
//https://qiita.com/kashimuuuuu/items/0cc99820d120aae473fe#%E6%BA%96%E5%82%99firebase%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B
