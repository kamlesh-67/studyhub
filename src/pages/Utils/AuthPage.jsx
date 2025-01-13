"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
// import Navbar from '../components/Navbar'
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{isLogin ? "Login" : "Register"}</CardTitle>
            <CardDescription>
              {isLogin
                ? "Enter your credentials to access your account"
                : "Create a new account to get started"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="login"
              onValueChange={(value) => setIsLogin(value === "login")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Link
              href="/forgot-password"
              className="text-sm text-muted-foreground hover:underline"
            >
              Forgot password?
            </Link>
            <p className="text-sm text-muted-foreground">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <Link
                href="#"
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium hover:underline"
              >
                {isLogin ? "Sign up" : "Log in"}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
