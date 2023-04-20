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
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  //submit
  const onSubmitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTitle === "") return;
    const todoData = collection(db, "todos");
    await addDoc(todoData, {
      title: inputTitle,
      content: inputContent,
      isDone: false,
    });
    setInputTitle("");
    setInputContent("");
  };

  return (
    <>
      <Box textAlign="center">新規追加</Box>
      <FormControl width="40%" margin="0 auto">
        <form onSubmit={onSubmitAdd}>
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
