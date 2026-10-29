import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Wishlist from '../pages/Wishlist';
import PropertyDetails from '../pages/PropertyDetails';
function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
    );
}

export default AppRoutes;