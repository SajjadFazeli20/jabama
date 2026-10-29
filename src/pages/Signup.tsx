import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import Header from "../layouts/Header";
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const isNameValid = name.length >= 3;
    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length >= 6;
    const isConfirmPasswordValid = password === confirmPassword;
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            alert("لطفاً اطلاعات را به درستی وارد کنید.");
            return;
        }
        setIsLoading(true);
        async function signup() {
            try {
                const response = await fetch("https://api.example.com/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password }),
                });
                const data = await response.json();
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    navigate("/");
                } else {
                    alert("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.");
                }
            } catch (error) {
                alert("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.");
            } finally {
                setIsLoading(false);
            }
        }

        signup();
    }
    return (
        <>
       <Header/>
        <div className="min-h-screen flex flex-center flex-col ">
            <div className="rounded-xl bg-white p-9 mt-20 mb-6">
                {/* login header */}
                <div>
                    <h1 className="text-2xl font-extrabold text-gray-800 mb-2">ورود به حساب کاربری</h1>
                    <p className="text-gray-500 text-sm ">برای رزرو نهایی اقامتگاه، وارد حساب خود شوید.</p>
                </div>
                <div className="w-92 h-px bg-gray-300 mx-auto my-6"></div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="" className="block text-gray-800 font-bold mb-2">نام و نام خانوادگی</label>
                    <input
                        type="text"
                        placeholder="علیرضا محمدی"
                        className="block mb-4 h-12 w-full border border-gray-300 bg-gray-100 py-3 px-4 text-gray-800 text-sm rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {!isNameValid && name.length > 0 && (
                        <p className="text-red-500">نام وارد شده بسیار کوتاه است.</p>
                    )}                    <label htmlFor="" className="block text-gray-800 font-bold mb-2">آدرس ایمیل</label>
                    <input
                        type="email"
                        placeholder="arash@example.com"
                        className="block mb-4 h-12 w-full border border-gray-300 bg-gray-100 py-3 px-4 text-gray-800 text-sm rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {!isEmailValid && email.length > 0 && (
                        <p className="text-red-500 font-semibold text-sm mb-4">آدرس ایمیل وارد شده معتبر نیست.</p>
                    )}
                    <label htmlFor="" className="block text-gray-800 font-bold mb-2">کلمه عبور</label>
                    <input
                        type="password"
                        className="block mb-4 h-12 w-full border border-gray-300 bg-gray-100 py-3 px-4 text-gray-800 text-sm rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isPasswordValid && password.length > 0 && (
                        <p className="text-red-500 font-semibold text-sm mb-6">کلمه عبور باید حداقل ۶ کاراکتر باشد.</p>
                    )}
                    <label htmlFor="" className="block text-gray-800 font-bold mb-2">تکرار کلمه عبور</label>
                    <input
                        type="password"
                        className="block mb-4 h-12 w-full border border-gray-300 bg-gray-100 py-3 px-4 text-gray-800 text-sm rounded-lg"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {!isConfirmPasswordValid && confirmPassword.length > 0 && (
                        <p className="text-red-500 font-semibold text-sm mb-6">کلمه‌های عبور با یکدیگر مطابقت ندارند.</p>
                    )}
                    <button type="submit" disabled={isLoading} className="bg-red-500 w-full h-12 text-white rounded-lg">
                        {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
                    </button>
                </form>
            </div>
            <span className="mb-25">هنوز حساب کاربری ندارید؟ <Link to={'/login'} className="text-red-500 underline">ثبت‌نام کنید</Link></span>
        </div>
        </>
    );
}

export default Signup;