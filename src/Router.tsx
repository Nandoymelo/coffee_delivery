import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { CheckoutFinished } from './pages/CheckoutFinished'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/CheckoutFinished" element={<CheckoutFinished />} />
      </Route>
    </Routes>
  )
}
