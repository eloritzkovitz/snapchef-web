import Link from "next/link";

export const metadata = {
  title: "Log In - SnapChef",
  description: "Log in to SnapChef to manage your ingredients and recipes.",
};

export default function Login() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Welcome to SnapChef</h1>
        <p className="text-center sm:text-left">
          Manage your ingredients with ease.
        </p>

        <div className="flex flex-col gap-4 items-center sm:items-start">
          <Link
            href="/ingredients"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            View Ingredients
          </Link>
        </div>
      </main>
    </div>
  );
}