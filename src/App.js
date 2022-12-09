import "./style/App.css"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
