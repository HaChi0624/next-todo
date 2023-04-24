import { Todo } from "@/types/todoType";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";

import { useTodoList } from "../../hooks/useTodo";

type Props = Todo & {};

export const EditModalButton: FC<Props> = (props) => {
  const { id, title, content, isDone } = props;
  const { toggleTodo, editTodo, setInputTitle, setInputContent } = useTodoList();
  

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>編集</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>編集</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl key={id}>
                <FormLabel>件名</FormLabel>
                <Input
                  placeholder={title}
                  onChange={(e) => setInputTitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>内容</FormLabel>
                <Input
                  placeholder={content}
                  onChange={(e) => setInputContent(e.target.value)}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => editTodo(id)}>保存</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
