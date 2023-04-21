import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { Todo } from "@/types/todoType";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    dispData();
  }, []);

  //データの取得
  const dispData = () => {
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
      console.log(snapshot.docs.map((doc) => ({ ...doc.data() })));
      setTodos(todoList);
    });
  };

  const deleteTodo = async () => {
    const todoDocumentData = doc(db, "todos");
    await deleteDoc(todoDocumentData);
    dispData();
  };

  return { todos, deleteTodo, dispData };
};

export const useInputTodo = () => {
  const { dispData } = useTodoList();
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  // 追加
  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
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
    dispData();
  };
};

//削除
