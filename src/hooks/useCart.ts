import { useContext } from 'react'
import { ContextCart } from '../context/contextCart'

export function UseCart() {
  const context = useContext(ContextCart)
  return context
}
