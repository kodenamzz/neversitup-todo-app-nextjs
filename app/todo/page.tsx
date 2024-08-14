import TodoCard from "@/components/cards/TodoCard";
import NoResult from "@/components/shared/NoResult";
import CreateTodo from "@/components/forms/CreateTodo";
import EditTodo from "@/components/forms/EditTodo";
import { getAllUserTodo } from "@/lib/actions/todo.action";
import React from "react";

const todo = async () => {
  const allTodo = await getAllUserTodo();
  if (!allTodo.isSuccess) {
    return (
      <NoResult title="Something went wrong" description="Please try again!" />
    );
  }
  return (
    <div className="p-8">
      <div className="flex w-full justify-between gap-4 max-[450px]:flex-col-reverse sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-light-100 text-nowrap max-[450px]:text-center">
          All Tasks
        </h1>
        {allTodo.data.length > 0 && <CreateTodo />}
      </div>
      <div className="mt-10 flex w-full flex-col gap-6">
        {allTodo.data.length > 0 ? (
          allTodo.data.map((todo) => <TodoCard key={todo.id} {...todo} />)
        ) : (
          <>
            <NoResult
              title="There are no Todo to show"
              description="Click button to create new todo "
            />
            <CreateTodo />
          </>
        )}
      </div>
      <EditTodo />
    </div>
  );
};

export default todo;
