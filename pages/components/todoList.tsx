//Todo一覧表示ページ
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

export const TodoList = () => {
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