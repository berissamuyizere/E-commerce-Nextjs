import Image from "next/image";
import Button from "../sharedComponent/Button";


const Login = ()=> {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-100 flex items-center justify-center">
                <Image
                    src="/images/Side Image.svg"
                    alt="Shopping cart with phone"
                    width={850}
                    height={600}
                />
            </div>
            <div className="flex flex-col justify-center px-8 md:px-20 w-120">
                <h2 className="text-4xl font-semibold mb-2">Login to Exclusive</h2>
                <p className="text-sm text-gray-500 mb-6">Enter your details below</p>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email or Phone Number"
                        className="w-full border-b border-gray-300  py-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-b border-gray-300 focus:outline-none py-2"
                    />

                    <div className="flex justify-between">
                        <Button buttonText="Login" variant="login" />
                        <p className="text-pink-700  mt-2">Forgot Password?</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;