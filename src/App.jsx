import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import Layout from "./components/layout"
import Profile from "./pages/profile"
import "./style/reset.css"
import "./styles.css"
import "./style/App.css"
import Login from "./components/login.jsx"
import { useData } from "./hooks/useData.jsx"

export default function App() {
  const { isLogin, login } = useData()
  return (
    <>
      {!login ? (
        <Login />
      ) : (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:user" element={<Profile />}/>
            </Routes>
          </Layout>
        </Router>
      )}
      
    </>
  )
}
