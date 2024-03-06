"use client";
// to let next 13 know that we are using it as a client component and not a server component
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import {BsGithub , BsGoogle} from "react-icons/bs"
import Button from "@/app/components/Button";
import Input from "@/app/components/Inputs/Input";
import AuthSocialButton from "./AuthSocialButton";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleState = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      pass: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //axios register
    }
    if (variant === "LOGIN") {
      //login nextAuth
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow-md sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input label="Name" register={register} id="name" errors={errors} disabled={isLoading}/>
          )}
          <Input
            label="Email"
            register={register}
            id="Email"
            errors={errors}
            type="email"
            disabled={isLoading}
          />{" "}
          <Input
            label="Password"
            register={register}
            id="Pass"
            errors={errors}
            type="password"
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign In" : "Resgister"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t border-gray-300" ></div>
              <div className="absolute flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500"> OR Continue with</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton icon={BsGithub} onClick={()=>socialAction('github')}/>
            <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('google')}/>
          </div>

          <div className="mt-3 flex gap-2 justify-center text-sm px-2 text-gray-600">
            <div>
              {variant === 'LOGIN' ? 'New to Messanger?':'Already logged in?'}
            </div>
            <div onClick={toggleState} className="underline cursor-pointer hover:text-blue-500 focus:text-blue-500">
              {variant === "LOGIN" ? "Create an account" : "Login"}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
