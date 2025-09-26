import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="cashpot-ui-theme">
      <Pages />
      <Toaster />
    </ThemeProvider>
  )
}

export default App 