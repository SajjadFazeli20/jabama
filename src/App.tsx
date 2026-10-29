import AppRoutes from './routes';
import Footer from './layouts/Footer';
function App() {
    return (
        <div className="bg-gray-100 min-h-screen overflow-hidden">
            <AppRoutes />
            <Footer />
        </div>
    );
}

export default App;