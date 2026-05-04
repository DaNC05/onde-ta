"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Page() {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <form className="w-full min-h-screen bg-background flex justify-center items-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-2">
          <CardTitle>Faça login na sua conta</CardTitle>
          <CardDescription>
            Digite sua credencial abaixo para fazer login em sua conta
          </CardDescription>

          <CardAction>
            <Link href="/create-account">
              <Button variant="link" className="p-0 h-auto">
                Inscreva-se
              </Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-5">
            {/* EMAIL */}
            <div className="grid gap-2 min-w-0">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="w-full"
                required
              />
            </div>

            {/* SENHA */}
            <div className="grid gap-2 min-w-0">
              <Label htmlFor="password">Senha</Label>

              <div className="relative w-full min-w-0">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="pr-10 w-full"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button type="submit" className="w-full">
            Entrar
          </Button>

          <div className="w-full border-t pt-4">
            <Button variant="outline" className="w-full">
              Faça login com o Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}