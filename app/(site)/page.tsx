import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="xs:mx-auto xs:w-full xs:mx-w-md">
        <Image
          alt="messanger logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo1.png"
        />
        <h3 className="mt-2 font-bold text-center tracking-wide text-lg text-[#4d4dff]">
          {" "}
          Sign in to your account
        </h3>
      </div>
      <AuthForm />
    </div>
  );
}
