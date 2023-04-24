import { Tr, Th, Tfoot } from "@chakra-ui/react";

export const TableFoot = () => {
  return (
    <>
      <Tfoot>
        <Tr backgroundColor="gray.200">
          <Th width="10">(ステータス)</Th>
          <Th>(件名)</Th>
          <Th>(内容)</Th>
          <Th width="10"></Th>
        </Tr>
      </Tfoot>
    </>
  );
};