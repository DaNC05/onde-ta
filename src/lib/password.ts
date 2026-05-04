export function isStrongPassword(password: string) {
  return password.length >= 6 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
}

export function getPasswordStrength(password: string) {
  if (!password) {
    return {
      valid: false,
      level: "vazia",
      progress: 0,
      message: "Digite uma senha com letras, números e símbolos.",
    }
  }

  const lower = /[a-z]/.test(password)
  const upper = /[A-Z]/.test(password)
  const number = /[0-9]/.test(password)
  const symbol = /[^A-Za-z0-9]/.test(password)
  
  const score = [lower, upper, number, symbol].filter(Boolean).length

  if (score === 4) {
    return {
      valid: true,
      level: "forte",
      progress: 100,
      message: "Senha forte! Excelente.",
    }
  }

  if (score === 3) {
    return {
      valid: false,
      level: "media",
      progress: 66,
      message: "Senha média. Use letras maiúsculas, minúsculas, números e símbolos.",
    }
  }

  if (score === 2) {
    return {
      valid: false,
      level: "fraca",
      progress: 33,
      message: "Senha fraca. Misture maiúsculas, minúsculas, números e símbolos.",
    }
  }

  return {
    valid: false,
    level: "vazia",
    progress: 0,
    message: "Digite uma senha com letras, números e símbolos.",
  }
}

export function passwordsMatch(password: string, confirmPassword: string) {
  return Boolean(password && confirmPassword && password === confirmPassword)
}
