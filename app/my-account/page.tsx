import { LoginForm } from "@/components/auth/LoginForm";

export default function MyAccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-white">Login</h1>
      <LoginForm />
    </div>
  );
}
