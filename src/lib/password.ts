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
  
  const typeScore = [lower, upper, number, symbol].filter(Boolean).length
  const lengthBonus = password.length >= 12 ? 1 : password.length >= 8 ? 0.5 : 0
  const totalScore = typeScore + lengthBonus

  // Forte: 4 tipos + comprimento adequado, ou 3 tipos com 12+ caracteres
  if (totalScore >= 4) {
    return {
      valid: true,
      level: "forte",
      progress: 100,
      message: "Senha forte! Excelente.",
    }
  }

  // Média: 3 tipos, ou 2 tipos com 12+ caracteres
  if (totalScore >= 3) {
    return {
      valid: false,
      level: "media",
      progress: 66,
      message: "Senha média. Adicione mais complexidade ou comprimento.",
    }
  }

  // Fraca: 1-2 tipos
  return {
    valid: false,
    level: "fraca",
    progress: 33,
    message: "Senha fraca. Misture maiúsculas, minúsculas, números e símbolos.",
  }
}

export function passwordsMatch(password: string, confirmPassword: string) {
  return Boolean(password && confirmPassword && password === confirmPassword)
}
