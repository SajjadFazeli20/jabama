import AppRoutes from './routes';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
function App() {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;