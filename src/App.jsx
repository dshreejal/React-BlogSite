import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import MyBlogs from "./pages/MyBlogs"
import { Route, Routes } from 'react-router-dom';
function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className=" bg-[#b2e0db] min-h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myblogs' element={<MyBlogs />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
