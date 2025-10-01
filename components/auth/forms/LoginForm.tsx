"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [loginFailed, setLoginFailed] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFailed(false);
    setErrorMessage(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginFailed(true);
    setErrorMessage("Invalid username or password");
    // Add your login logic here
  };

  return (
    <form
      className="w-full max-w-sm md:max-w-md space-y-10"
      onSubmit={handleLogin}
    >
      <div className="space-y-6">
        <div className="space-y-8">
          <p className="text-2xl lg:text-[2rem]/[100%] font-semibold">
            Sign in
          </p>

          <div className="space-y-3">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Enter username"
              value={formData.username}
              onChange={handleInputChange}
              className={`border ${
                loginFailed ? "border-red-500" : "border-[#ECECEC]"
              } bg-[#FAFAFA] rounded-xl p-6 placeholder:text-fiduciaGrey font-normal text-sm lg:text-base outline-none transition-all duration-300 ease-in-out`}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={seePassword ? "text" : "password"}
                name="password"
                id="password"
                required
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                className={`border ${
                  loginFailed ? "border-red-500" : "border-[#ECECEC]"
                } bg-[#FAFAFA] rounded-xl p-6 placeholder:text-fiduciaGrey font-normal text-sm lg:text-base outline-none transition-all duration-300 ease-in-out`}
              />
              <button
                type="button"
                onClick={() => setSeePassword(!seePassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-content-fade cursor-pointer"
              >
                {seePassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1.5">
              <Checkbox id="terms" className="size-4 lg:size-6" />
              <Label
                htmlFor="terms"
                className="text-[#7D7D7D] text-xs lg:text-sm"
              >
                Remember me
              </Label>
            </div>
          </div>

          <Link href="/auth/forgot-password">
            <p className="text-primary hover:underline font-semibold text-sm lg:text-base">
              Forgot password?
            </p>
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        {errorMessage && (
          <p className="text-red-500 text-xs lg:text-sm mt-2">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="bg-primary disabled:opacity-50 w-full text-white py-3 px-4 rounded-3xl font-bold text-sm lg:text-base cursor-pointer"
        >
          Log in
        </button>
      </div>
    </form>
  );
}
