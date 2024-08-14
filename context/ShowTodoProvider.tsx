"use client";

import { ITodo } from "@/types";
import React, { createContext, useCallback, useContext, useState } from "react";

interface ShowTodoContextType {
  isShow: boolean;
  todoData: ITodo | undefined;
  handleShowTodo: (todo: ITodo) => void;
  handleCloseTodo: (isOpen: boolean) => void;
}

const ShowTodoContext = createContext<ShowTodoContextType | undefined>({
  isShow: false,
  todoData: undefined,
  handleShowTodo: () => {},
  handleCloseTodo: () => {},
});

export function ShowTodoProvider({ children }: { children: React.ReactNode }) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [todoData, setTodoData] = useState<ITodo | undefined>(undefined);

  const handleShowTodo = useCallback((todo: ITodo) => {
    setTodoData(todo);
    setIsShow(true);
  }, []);
  const handleCloseTodo = useCallback((isOpen: boolean) => {
    if (isOpen) return;
    setTodoData(undefined);
    setIsShow(false);
  }, []);

  return (
    <ShowTodoContext.Provider
      value={{ isShow, todoData, handleShowTodo, handleCloseTodo }}
    >
      {children}
    </ShowTodoContext.Provider>
  );
}

export function useShowTodo() {
  const context = useContext(ShowTodoContext);

  if (context === undefined) {
    throw new Error("useShowTodo must be used within a ShowTodoProvider");
  }

  return context;
}
