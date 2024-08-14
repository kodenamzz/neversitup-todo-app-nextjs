"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { DialogHeader, DialogFooter } from "../ui/dialog";
import { useShowTodo } from "@/context/ShowTodoProvider";
import moment from "moment";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { editTodo } from "@/lib/actions/todo.action";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
});

const EditTodo = () => {
  const { isShow, todoData, handleCloseTodo } = useShowTodo();

  const [isEdit, setIsEdit] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleClickEdit = () => {
    setIsEdit(true);
    form.setValue("title", todoData?.title || "");
    form.setValue("description", todoData?.description || "");
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await editTodo({ ...values, id: todoData?.id || "" });
      toast.success("Todo has been updated");
      handleCloseTodo(false);
      setIsEdit(false);
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong! please try again later");
    }
  }

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setIsEdit(false);
      handleCloseTodo(false);
    }
  };

  if (!todoData) return null;
  return (
    <Dialog open={isShow} onOpenChange={onOpenChange}>
      {!isEdit && (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{todoData.title}</DialogTitle>
            <DialogDescription>{todoData.description}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between mt-6 ">
            <p
              className={`small-regular text-dark-400 flex items-center gap-1`}
            >
              Created By{" "}
              <span className={`body-medium line-clamp-1`}>
                {todoData.created_by.username}
              </span>
            </p>
            <p
              className={`small-regular text-dark-400 flex items-center gap-1`}
            >
              Created On{" "}
              <span className={`body-medium line-clamp-1`}>
                {moment(todoData.created_at).format("DD/MM/YYYY")}
              </span>
            </p>
          </div>
          <div className="mb-8">
            <p
              className={`small-regular text-dark-400 flex items-center gap-1`}
            >
              Updated On{" "}
              <span className={`body-medium line-clamp-1`}>
                {moment(todoData.updated_at).format("DD/MM/YYYY")}
              </span>
            </p>
          </div>
          <DialogFooter className="justify-between gap-2">
            <DialogClose asChild className="flex-1">
              <Button type="button">Close</Button>
            </DialogClose>
            <Button
              type="button"
              onClick={handleClickEdit}
              variant="secondary"
              className="flex-1"
            >
              Edit
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
      {isEdit && (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            {/* <DialogDescription>Edit your todo</DialogDescription> */}
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4 py-4">
                <div className="grid items-center gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="title"
                            {...field}
                            className="col-span-3"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid items-center gap-4">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input
                            multiline
                            placeholder="description"
                            {...field}
                            className="col-span-3"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  onClick={() => setIsEdit(false)}
                  variant="secondary"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="flex-1"
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default EditTodo;
