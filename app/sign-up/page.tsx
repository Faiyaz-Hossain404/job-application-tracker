"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <form>
          <CardContent>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="johnDoe@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="*******"
                required
              />
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
