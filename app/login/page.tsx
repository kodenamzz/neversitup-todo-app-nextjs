import UserAuthForm from "@/components/forms/UserAuthForm";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center p-4">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your username and password below to login your account
            </p>
          </div>
          <UserAuthForm formType="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
