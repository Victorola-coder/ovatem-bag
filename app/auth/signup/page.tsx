"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Otp } from "@/app/components/ui";
import { Surface } from "@/app/components/ui";
import { signupSchema, type SignupFormData } from "@/app/lib/validations/auth";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = signupSchema.parse(formData);
      // Here you would make your API call
      setShowOtp(true);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Surface className="w-full max-w-md p-6">
          <h1 className="mb-6 text-2xl font-bold text-white">Create your account</h1>

          {!showOtp ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <Input
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <Button
                type="submit"
                loading={loading}
                className="w-full"
                variant="primary"
              >
                Sign Up
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-center text-[#FFFFFF80]">
                Enter the verification code sent to your email
              </p>
              <Otp />
            </div>
          )}
      </Surface>
    </div>
  );
}
