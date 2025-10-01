import Header from "@/components/auth/layout/Header";
import LoginForm from "@/components/auth/forms/LoginForm";

export default function Home() {

  return (
    <main className="font-jakarta min-h-[100dvh] flex flex-col">
      <Header />

      <section className="pt-3.5 pb-11 px-4 md:px-8 lg:px-12 flex-1 grid lg:grid-cols-2">
        <div className="bg-[#DCECFF] h-[calc(100vh-141px)] rounded-4xl hidden lg:block" />

        <div className="lg:px-14 xl:px-20 flex items-center justify-center">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
