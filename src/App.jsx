import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeTamplate from "../Templates/HomeTemplate";
import DragAndDrop from "./TEST/DragAndDrop/DragAndDrop";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomeTamplate />}>
                        <Route path="draganddrop" element={<DragAndDrop />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
