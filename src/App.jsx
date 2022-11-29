import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div>

      </div>
    </QueryClientProvider>
  )
}

export default App
