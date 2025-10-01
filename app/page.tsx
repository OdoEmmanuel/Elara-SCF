import Header from "@/components/auth/layout/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-jakarta min-h-[100dvh] flex flex-col">
      <Header />

      <section className="pt-3.5 pb-11 px-4 md:px-8 lg:px-12 flex-1 grid lg:grid-cols-2">
        <div className="bg-[#DCECFF] h-[calc(100vh-141px)] rounded-4xl hidden lg:block" />

        <div className="lg:px-14 xl:px-20 flex items-center justify-center">
          <form action="" className="w-full max-w-sm md:max-w-md space-y-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    className="size-4 lg:size-6 rounded-sm lg:rounded-lg accent-[#30C075]"
                  />
                  <p className="text-[#7D7D7D] text-xs lg:text-sm">Remember me</p>
                </div>

                <Link href="/auth/forgot-password">
                  <p className="text-primary hover:underline font-semibold text-sm lg:text-base">
                    Forgot password?
                  </p>
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary disabled:opacity-50 w-full text-white py-3 px-4 rounded-3xl font-bold text-sm lg:text-base"
            >
              Log in
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
