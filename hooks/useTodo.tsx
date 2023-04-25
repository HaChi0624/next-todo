import { useState } from "react";
import { db } from "@/lib/firebase";
import { Todo } from "@/types/todoType";
import {
  collection,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  //これいる？
  // useEffect(() => {
  //   dispData()
  // },[]) 

  //データの取得　dispData
  const dispData = () => {
    const todoData = collection(db, "todos");
    onSnapshot(todoData, (snapshot) => {
      // const todoList: Todo[] = []; 空の配列にpushしていくのは良くない
      const newTodos = [...todos]
      snapshot.docs.map((doc, index) => {
        const todo: Todo = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          isDone: doc.data().isDone,
        };
        // newTodos.push(todo)
        newTodos[index] = todo
      });
      console.log(snapshot.docs.map((doc) => ({ ...doc.data() })));
      setTodos(newTodos);
    });
  };

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
    await dispData();
  };

  //完了⇔未完了
  const toggleTodoStatus = async (id: string, isDone: boolean) => {
    const todoDocumentData = doc(db, "todos", id);
    await updateDoc(todoDocumentData, {
      isDone: !isDone,
    })
    await dispData();
  };

  

  //編集
  const editTodo = async (id: string) => {
    const todoDocumentData = doc(db, "todos", id);
    await updateDoc(todoDocumentData, {
      title: inputTitle,
      content: inputContent,
    });
    dispData();
  };

  //削除
  const deleteTodo = async (id: string) => {
    const todoDocumentData = doc(db, "todos", id);
    await deleteDoc(todoDocumentData);
    dispData();
  };



  return {
    todos,
    deleteTodo,
    toggleTodoStatus,
    editTodo,
    dispData,
    inputTitle,
    setInputTitle,
    inputContent,
    setInputContent,
    addTodo,
  };
};

//addTodoでe.preventDefault()を消したら即時リストに追加されるけど、画面全体で再描画されるのがうっとうしい
//onSnapshot使うべきか→使わないと無理だった

// https://qiita.com/sh-suzuki0301/items/597bdbf17253feb5f55b
