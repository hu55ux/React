import { Routes, Route } from 'react-router-dom';
import Products from "../pages/Products";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import UserAccount from "../pages/UserAccount";
import UserDetails from "../pages/UserDetails";

const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path='user' element={<UserLayout />}>
                <Route path="/userAccount" element={<UserAccount />} />
                <Route path="/userData" element={<UserDetails />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Navigator;
