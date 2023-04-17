import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";

export const InputTodo = () => {
  return (
    <VStack>
      <Box>新規追加</Box>
      <FormControl width="80%" margin="0 auto">
        <div>
          <FormLabel>件名</FormLabel>
          <Input />
        </div>
        <div>
          <FormLabel>内容</FormLabel>
          <Input />
        </div>
        <FormHelperText>*件名は必ず入れてください</FormHelperText>
      </FormControl>
    </VStack>
  );
};

// まだ形だけ
