"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { createUser, loginUser } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  formType: "register" | "login";
}

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(4, {
    message: "Username must be at least 3 characters.",
  }),
});

const UserAuthForm = ({ className, formType, ...props }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (formType === "register") {
      try {
        await createUser(values);
        toast.success("User has been created");
        router.push("/login");
      } catch (error) {
        toast.error("Something went wrong! please try again later");
      }
    }

    if (formType === "login") {
      try {
        await loginUser(values);
        toast.success("Login success");
        router.push("/todo");
      } catch (error) {
        toast.error("Something went wrong! please try again later");
      }
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={form.formState.isSubmitting}
              className="w-full mt-2"
              type="submit"
            >
              {form.formState.isSubmitting
                ? "loading..."
                : formType === "register"
                ? "Register"
                : "Login"}
            </Button>

            <Link href={formType === "register" ? "/login" : "/register"}>
              <Button
                disabled={form.formState.isSubmitting}
                className="w-full mt-2"
                variant="outline"
                type="submit"
              >
                {formType === "register" ? "Login" : "Register"}
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserAuthForm;
