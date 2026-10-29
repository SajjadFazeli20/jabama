import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const isEmailValid = email.includes("@") && email.length >= 3;
    const isPasswordValid = password.length >= 6;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!isEmailValid || !isPasswordValid) {
            setError("آدرس ایمیل یا کلمه عبور وارد شده معتبر نیست. لطفاً دوباره تلاش کنید.");
            return;
        }

        setIsLoading(true);
        setError("");

        async function login() {
            try {
                const response = await fetch("https://api.example.com/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });
                const data = await response.json();
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    navigate("/");
                } else {
                    setError("آدرس ایمیل یا کلمه عبور وارد شده معتبر نیست. لطفاً دوباره تلاش کنید.");
                }
            } catch (error) {
                setError("خطایی در ورود به حساب کاربری رخ داده است. لطفاً دوباره تلاش کنید.");
            } finally {
                setIsLoading(false);
            }
        }

        login();
    }

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="rounded-xl bg-white p-9 mb-6 w-full max-w-md">
                    <div>
                        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">ورود به حساب کاربری</h1>
                        <p className="text-gray-500 text-sm">برای رزرو نهایی اقامتگاه، وارد حساب خود شوید.</p>
                    </div>

                    <div className="w-92 h-px bg-gray-300 mx-auto my-6"></div>

                    <form onSubmit={handleSubmit} className="w-full">
                        <label className="block text-gray-800 font-bold mb-2">آدرس ایمیل</label>
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

                        <label className="block text-gray-800 font-bold mb-2">کلمه عبور</label>
                        <input
                            type="password"
                            className="block mb-4 h-12 w-full border border-gray-300 bg-gray-100 py-3 px-4 text-gray-800 text-sm rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!isPasswordValid && password.length > 0 && (
                            <p className="text-red-500 font-semibold text-sm mb-6">کلمه عبور باید حداقل ۶ کاراکتر باشد.</p>
                        )}

                        {error && <p className="text-red-500 font-semibold text-sm mb-4">{error}</p>}

                        <button type="submit" disabled={isLoading} className="bg-red-500 w-full h-12 text-white rounded-lg">
                            {isLoading ? "در حال ورود..." : "ورود"}
                        </button>
                    </form>
                </div>

                <span>
                    هنوز حساب کاربری ندارید؟{" "}
                    <Link to={"/signup"} className="text-red-500 underline">
                        ثبت‌نام کنید
                    </Link>
                </span>
            </div>
        </>
    );
}

export default Login;