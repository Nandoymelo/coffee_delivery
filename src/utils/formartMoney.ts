export function formartMoney(value: number) {
  return value.toLocaleString('pt-Br', {
    minimumFractionDigits: 2,
  })
}
