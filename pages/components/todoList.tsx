//Todo一覧表示ページ
import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
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
import { useTodoList } from "@/hooks/useTodo";
import { useEffect } from "react";
import { TableHead } from "./atom/tableComponents/TableHead";
import { TableFoot } from "./atom/tableComponents/TableFoot";
import { EditModalButton } from "./editModal";

export const TodoList = () => {
  const { todos, deleteTodo, toggleTodo, dispData } = useTodoList();

  useEffect(() => {
    dispData();
  }, []);

  const incompletedTodos = todos.filter((todo) => todo.isDone === false);
  const completedTodos = todos.filter((todo) => todo.isDone !== false);

  return (
    <VStack>
      <Box>Todo一覧</Box>
      <Tabs>
        <TabList margin="0 0 0 auto">
          <Tab>全て</Tab>
          <Tab>未完了</Tab>
          <Tab>完了</Tab>
        </TabList>

        <TabPanels>
          {/* 全体テーブル */}
          <TabPanel>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>ソート機能が欲しいよね</TableCaption>
                <TableHead />
                <Tbody>
                  {todos.map((todo) => (
                    <Tr key={todo.id}>
                      <Td>
                        {todo.isDone === false ? (
                          <Box color="red">未完了</Box>
                        ) : (
                          <Box color="blue">完了</Box>
                        )}
                      </Td>
                      <Td>{todo.title}</Td>
                      <Td>{todo.content}</Td>
                      <Td>
                        <EditModalButton
                          id={todo.id}
                          title={todo.title}
                          content={todo.content}
                          isDone={false}
                        />
                        <Button onClick={() => deleteTodo(todo.id)}>
                          削除
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <TableFoot />
              </Table>
            </TableContainer>
          </TabPanel>

          {/* 未完了テーブル */}
          <TabPanel>
            <TableContainer>
              <Table>
                <TableHead />
                {/* テーブルに何もない時、if文で切り替えたい */}
                <Tbody>
                  {incompletedTodos.map((todo) => (
                    <Tr key={todo.id}>
                      <Td>
                        <Box color="red">未完了</Box>
                      </Td>
                      <Td>{todo.title}</Td>
                      <Td>{todo.content}</Td>
                      <Td>
                        <EditModalButton
                          id={todo.id}
                          title={todo.title}
                          content={todo.content}
                          isDone={false}
                        />
                        <Button onClick={() => deleteTodo(todo.id)}>
                          削除
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <TableFoot />
              </Table>
            </TableContainer>
          </TabPanel>

          {/* 完了テーブル */}
          <TabPanel>
            <TableContainer>
              <Table>
                <TableHead />
                <Tbody>
                  {completedTodos.map((todo) => (
                    <Tr key={todo.id}>
                      <Td>
                        <Box color="blue">完了</Box>
                      </Td>
                      <Td>{todo.title}</Td>
                      <Td>{todo.content}</Td>
                      <Td>
                        <EditModalButton
                          id={todo.id}
                          title={todo.title}
                          content={todo.content}
                          isDone={false}
                        />
                        <Button onClick={() => deleteTodo(todo.id)}>
                          削除
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <TableFoot />
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

//まだ形だけ
//tab切り替えでページ遷移になる？
//完了未完了のスタイルを無理やりboxに入れてやったけどましな方法はないのか
//編集ボタン内に削除ボタンを置く

//参考
//https://qiita.com/kashimuuuuu/items/0cc99820d120aae473fe#%E6%BA%96%E5%82%99firebase%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B
