"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUp() {
  return (
    <div className="flex min-h-[calc(100vh-4rm)] items-center justify-center bg-white p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sign UP</CardTitle>
          <CardDescription>
            Create an account to start tracking your job application
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
