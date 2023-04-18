import { ChangeEvent, SetStateAction, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const InputTodo = () => {
  const [inputText, setInputText] = useState("");

  const onSubmitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText === "") return;
    await addDoc(collection(db, "todos"), {
      text: inputText,
    });
    setInputText("");
    alert(inputText);
  };

  return (
    <>
      <Box textAlign="center">新規追加</Box>
      <FormControl width="40%" margin="0 auto">
        <form onSubmit={onSubmitAdd}>
          <Box>
            <FormLabel>件名</FormLabel>
            <Input
              value={inputText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputText(e.target.value)
              }
            />
          </Box>
          <Box>
            <FormLabel>内容</FormLabel>
            <Input />
          </Box>
          <FormHelperText>*件名は必ず入れてください</FormHelperText>
          <Button>追加</Button>
        </form>
      </FormControl>
    </>
  );
};

// まだ形だけ
