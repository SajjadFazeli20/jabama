import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 max-w-[98%] mx-auto mb-2 rounded-2xl">
            <div className="container">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                    <Link to="/support" className="text-center text-gray-500">پشتیبانی ۲۴ ساعته</Link>
                    <Link to="/support" className="text-center text-gray-500">راهنمای رزرو اقامتگاه</Link>
                    <Link to="/support" className="text-center text-gray-500">قوانین و مقررات</Link>
                    <Link to="/support" className="text-center text-gray-500">درباره جاباما</Link>
                </div>
                <div className="w-full h-px bg-gray-700 my-5"></div>
                <div className="flex items-center justify-center ">
                    <p className="text-center text-gray-500">© 2026 جاباما. تمامی حقوق محفوظ است.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;