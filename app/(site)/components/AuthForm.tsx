"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

// to let next 13 know that we are using it as a client component and not a server component
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
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow-md sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {
            variant==='REGISTER' && (
              <Input label="name" register={register} id="name" errors={errors} />

            )
          }
           <Input label="Email" register={register} id="Email" errors={errors} type="email"/> <Input label="Password" register={register} id="Pass" errors={errors} type="password"/>
           <div>
            <Button>Submit</Button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
