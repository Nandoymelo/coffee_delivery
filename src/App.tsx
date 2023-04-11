import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ContextCartProvider } from './context/contextCart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ContextCartProvider>
          <Router />
        </ContextCartProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
