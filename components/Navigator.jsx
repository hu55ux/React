import { Routes, Route } from 'react-router-dom';
import Products from "../pages/Products"
import Details from "../pages/Details"

const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<div>{Products}</div>} />
            <Route path="/details" element={<div>{Details}</div>} />
        </Routes>
    )
}

export default Navigator