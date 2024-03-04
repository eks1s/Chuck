import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChucknorisPage } from "./pages/chucknoris";
import { Layout } from "./routes/layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<ChucknorisPage />} />
            </Route>
        </Routes>
    );
}

export default App;
