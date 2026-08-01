import { Suspense } from "react";

import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
