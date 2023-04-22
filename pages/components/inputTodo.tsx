import { useInputTodo } from "@/hooks/useTodo";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const InputTodo = () => {
  const { inputTitle, setInputTitle, inputContent, setInputContent, addTodo } =
    useInputTodo();

  return (
    <>
      <Box textAlign="center">新規追加</Box>
      <FormControl width="40%" margin="0 auto">
        <form onSubmit={addTodo}>
          <div>
            <FormLabel>件名</FormLabel>
            <Input
              value={inputTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputTitle(e.target.value)
              }
            />
          </div>
          <div>
            <FormLabel>内容</FormLabel>
            <Input
              value={inputContent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputContent(e.target.value)
              }
            />
          </div>

          <Button type="submit">登録</Button>
        </form>
      </FormControl>
    </>
  );
};

//画面をリロードしないとリストに表示されない
//chakra ui Buttonにsubmit属性はない
