import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Button from "../sharedComponent/Button";


 const Signup= ()=> {
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
                    <h2 className="text-4xl font-semibold mb-2">Create an account</h2>
                    <p className="text-sm text-gray-500 mb-6">Enter your details below</p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border-b border-gray-300  py-2"
                        />
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
                        <Button buttonText="Create Account" variant="" />
                        <button
                            type="button"
                            className="w-85 flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-sm"
                        >
                            <FcGoogle />
                            Sign up with Google
                        </button>
                    </form>
                    <p className="text-sm text-center mt-6 text-gray-600">
                        Already have account?{" "}
                        <a href="/login" className="font-medium underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
    );
}
export default Signup;