import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import MyBlogs from "./pages/MyBlogs"
import { Route, Routes } from 'react-router-dom';
import BlogState from "./context/blogs/BlogState";
import UserState from "./context/users/UserState";
import Login from "./pages/Login";
import PrivateRoute from "./route/PrivateRoute";
import ReadMore from "./pages/ReadMore";
import NotFound from "./pages/NotFound";
function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <UserState>
        <BlogState>
          <div className=" bg-[#b2e0db] min-h-screen flex flex-col">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path='/myblogs' element={<MyBlogs />} exact />
              </Route>
              <Route path='/readmore/:id' element={<ReadMore />} />
              <Route path='/login' element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BlogState>
      </UserState>
    </QueryClientProvider>
  )
}

export default App
