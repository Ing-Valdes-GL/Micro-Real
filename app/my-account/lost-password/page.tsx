import { LostPasswordForm } from "@/components/auth/LostPasswordForm";
import Link from "next/link";

export default function LostPasswordPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-white">Lost your password?</h1>
      <p className="mt-2 text-gray-500">
        Please enter your username or email address. You will receive a link to
        create a new password via email.
      </p>
      <LostPasswordForm />
      <Link
        href="/my-account"
        className="mt-6 inline-block text-sm text-mrs-gold hover:underline"
      >
        Back to login
      </Link>
    </div>
  );
}
