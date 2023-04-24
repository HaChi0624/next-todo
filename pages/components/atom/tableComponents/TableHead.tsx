import { Thead, Tr, Th } from "@chakra-ui/react";

export const TableHead = () => {
  return (
    <>
      <Thead>
        <Tr backgroundColor="gray.200">
          <Th width="10">(ステータス)</Th>
          <Th>(件名)</Th>
          <Th>(内容)</Th>
          <Th width="10"></Th>
        </Tr>
      </Thead>
    </>
  );
};
