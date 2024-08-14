"use server";

import { cookies } from "next/headers";
import { getAuthToken } from "./get-token";
import { IResponseAllTodo, ITodo } from "@/types";
import { revalidatePath } from "next/cache";

interface CreateTodoParams {
  title: string;
  description: string;
}
interface EditTodoParams {
  id: string;
  title: string;
  description: string;
}

export async function getAllUserTodo(): Promise<IResponseAllTodo> {
  try {
    const authToken = await getAuthToken();
    const response = await fetch(`${process.env.API_ENDPOINT}/todo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("result", result);
    return result as IResponseAllTodo;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function createTodo(newTodo: CreateTodoParams) {
  try {
    const authToken = await getAuthToken();
    const response = await fetch(`${process.env.API_ENDPOINT}/todo`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    revalidatePath("/todo");
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function editTodo(updateTodo: EditTodoParams) {
  try {
    const { id, ...dataToUpdate } = updateTodo;
    const authToken = await getAuthToken();
    const response = await fetch(`${process.env.API_ENDPOINT}/todo/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dataToUpdate),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    revalidatePath("/todo");
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
export async function deleteTodo(todoId: string) {
  try {
    const authToken = await getAuthToken();
    const response = await fetch(`${process.env.API_ENDPOINT}/todo/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    revalidatePath("/todo");
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
