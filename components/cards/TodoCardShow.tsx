"use client";

import { Card } from "../ui/card";
import { ITodo } from "@/types";
import { useShowTodo } from "@/context/ShowTodoProvider";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "../ui/alert-dialog";
import { useState } from "react";
import ConfirmDialog from "../shared/ConfirmDialog";
import { deleteTodo } from "@/lib/actions/todo.action";
import { toast } from "sonner";

interface Props {
  children: React.ReactNode;
  todo: ITodo;
}
const TodoCardShow = ({ children, todo }: Props) => {
  const { handleShowTodo } = useShowTodo();

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setShowConfirmDialog(true);
  };

  const handleConfirmClick = async () => {
    setIsDeleting(true);
    try {
      await deleteTodo(todo.id);
      toast.success("Todo has been created");
      setShowConfirmDialog(false);
      setIsDeleting(false);
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong! please try again later");
      setIsDeleting(false);
    }
  };
  return (
    <>
      <Card
        onClick={() => handleShowTodo(todo)}
        className="cursor-pointer relative"
      >
        <Button
          onClick={handleClickDelete}
          size="sm"
          className="px-3 absolute right-2 top-2"
          variant={"outline"}
        >
          <span className="sr-only">Delete</span>
          <Trash2 className="h-4 w-4 text-red-600" />
        </Button>
        {children}
      </Card>
      <ConfirmDialog
        title="Delete Todo!"
        description="Are you sure want to delete this todo ?"
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        onConfirmClick={handleConfirmClick}
        isLoading={isDeleting}
      />
    </>
  );
};

export default TodoCardShow;
