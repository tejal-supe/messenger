import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:mx-w-md">
        <Image
          alt="messanger logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h3 className="mt-4 text-center tracking-normal text-xl text-gray-600">
          {" "}
          Sign in to your account
        </h3>
      </div>
      <AuthForm />
    </div>
  );
}
