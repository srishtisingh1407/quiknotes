import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <SignIn />{" "}
    </div>
  );
}
