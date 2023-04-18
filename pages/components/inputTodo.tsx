import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

export const InputTodo = () => {
  return (
    <VStack>
      <Box>新規追加</Box>
      <FormControl width="80%" margin="0 auto">
        <Box>
          <FormLabel>件名</FormLabel>
          <Input />
        </Box>
        <Box>
          <FormLabel>内容</FormLabel>
          <Input />
        </Box>
        <FormHelperText>*件名は必ず入れてください</FormHelperText>
      </FormControl>
    </VStack>
  );
};

// まだ形だけ
