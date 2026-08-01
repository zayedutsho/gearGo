import { Suspense } from "react";

import AuthContent from "../_components/AuthContent";
import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[45%_55%]">
        {/* Left */}
        <section className="flex items-center justify-center bg-white px-8 lg:px-20">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </section>

        {/* Right */}
        <section className="hidden lg:flex bg-[#123524]">
          <AuthContent />
        </section>
      </div>
    </main>
  );
}
