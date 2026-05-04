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
import { getPasswordStrength, passwordsMatch } from "@/lib/password"

export default function Page() {
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

  const passwordInfo = getPasswordStrength(password)
  const confirmMatch = passwordsMatch(password, confirmPassword)

  const getProgressColor = (level: string) => {
    switch (level) {
      case "forte":
        return "bg-emerald-500"
      case "media":
        return "bg-yellow-500"
      case "fraca":
        return "bg-red-500"
      default:
        return "bg-muted"
    }
  }

  return (
    <form className="w-full min-h-screen bg-background flex justify-center items-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Crie sua conta</CardTitle>
          <CardDescription>
            Informe seu nome, email e senha para começar.
          </CardDescription>
          <CardAction>
            <Link href="/login">
              <Button variant="link">Já tenho conta</Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" placeholder="Seu nome" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            {/* SENHAS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              
              {/* SENHA */}
              <div className="flex flex-col gap-2 min-w-0">
                <Label htmlFor="password">Senha</Label>

                <div className="relative w-full min-w-0">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    className="pr-10 w-full"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>

                {/* barra */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${getProgressColor(
                      passwordInfo.level
                    )}`}
                    style={{ width: `${passwordInfo.progress}%` }}
                  />
                </div>

                {/* mensagem com altura fixa */}
                <p className="text-sm min-h-[20px]">
                  {password
                    ? passwordInfo.message
                    : ""}
                </p>
              </div>

              {/* CONFIRMAR SENHA */}
              <div className="flex flex-col gap-2 min-w-0">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>

                <div className="relative w-full min-w-0">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirme"
                    className="pr-10 w-full"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((v) => !v)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>

                {/* espaço equivalente à barra */}
                <div className="h-2" />

                {/* mensagem alinhada */}
                <p className="text-sm min-h-[20px]">
                  {confirmPassword
                    ? confirmMatch
                      ? "As senhas coincidem"
                      : "As senhas não coincidem"
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            disabled={passwordInfo.progress < 66 || !confirmMatch}
          >
            Criar conta
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}