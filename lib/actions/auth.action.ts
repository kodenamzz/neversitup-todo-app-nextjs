"use server";

import { cookies } from "next/headers";
const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

interface AuthUserParams {
  username: string;
  password: string;
}

export async function createUser(newUser: AuthUserParams) {
  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
export async function loginUser(user: AuthUserParams) {
  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("result", result);
    cookies().set("jwt", result.access_token, config);
    return result.username;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
