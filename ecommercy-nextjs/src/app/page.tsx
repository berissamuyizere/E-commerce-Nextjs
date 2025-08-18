import Image from "next/image";
import Button from "./sharedComponent/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRemoveRedEye, MdOutlineStar } from "react-icons/md";
import { FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";

export default function Home() {
    const categories = [
        { icon: <FaMobileAlt />, label: 'Phones' },
        { icon: <FaDesktop />, label: 'Computers' },
        { icon: <FaCamera />, label: 'Camera', active: true },
        { icon: <FaHeadphones />, label: 'HeadPhones' },
        { icon: <FaGamepad />, label: 'Gaming' },
    ];

    return (
            <div className="flex flex-col items-center min-h-screen bg-gray-50">
                <div className="container mx-auto flex flex-col md:flex-row gap-8 py-8 px-4">
                    <aside className="w-full md:w-1/4">
                        <ul className="space-y-4 text-lg">
                            {[
                                "Woman's Fashion",
                                "Men's Fashion",
                                "Electronics",
                                "Home & Lifestyle",
                                "Medicine",
                                "Sports & Outdoor",
                                "Baby's & Toys",
                                "Groceries & Pets",
                                "Health & Beauty"
                            ].map((item, index) => (
                                <li key={index} className="hover:text-pink-600 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <section className="w-full md:w-3/4">
                        <div className="bg-black rounded-xl flex flex-col md:flex-row items-center justify-between px-8 py-10 relative">
                            <div className="text-center md:text-left">
                                <h2 className="text-white text-xl font-semibold mb-2">iPhone 14 Series</h2>
                                <h1 className="text-3xl font-bold text-white mb-4">Up to 10% off Voucher</h1>
                                <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200">
                                    Shop Now &rarr;
                                </button>
                            </div>
                            <Image
                                src="/images/iphone.jpg"
                                alt="iPhone 14"
                                width={500}
                                height={600}
                                className="object-contain"
                            />
                        </div>
                    </section>
                </div>
                <section className="container mx-auto py-8 px-4">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-6 h-10 bg-red-500 rounded-lg"></div>
                        <h1 className="text-red-500 text-2xl font-bold">Today's</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <div className="flex ">
                            <h2 className="text-2xl font-bold">Flash Sales</h2>
                            <div className="flex gap-2 ml-14">
                                {['03:Days', '23:Hours', '19:Minutes', '56:Seconds'].map((time, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <span className="text-pink-600 text-lg font-bold">{time.split(':')[0]}</span>
                                        <span className="text-xs text-gray-400">{time.split(':')[1]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex gap-4">
                                <FaArrowLeftLong className="cursor-pointer" />
                                <FaArrowRightLong className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[
                            { img: "/images/gamepad.jpg", title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: "-40%" },
                            { img: "/images/keyboard.jpeg", title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1480, discount: "-35%" },
                            { img: "/images/tvshop.png", title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: "-30%" },
                            { img: "/images/chairecommerce.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%" },
                            { img: "/images/chairecommerce.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%" }
                        ].map((product, idx) => (
                            <div key={idx} className="bg-white shadow rounded-2xl w-64 p-4 relative flex-shrink-0">
                                <span className="absolute top-4 left-4 px-2 py-0.5 bg-pink-600 text-xs text-white rounded font-bold">{product.discount}</span>
                                <div className="flex justify-center py-6">
                                    <Image src={product.img} alt={product.title} width={180} height={180} className="object-contain" />
                                </div>
                                <div className="font-semibold text-sm">{product.title}</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-pink-700 font-bold text-lg">${product.price}</span>
                                    <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <MdOutlineStar key={i} className="text-yellow-400 text-xl" />
                                    ))}
                                    <span className="text-gray-500 ml-2">(88)</span>
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <AiOutlineHeart className="text-lg hover:text-pink-600 cursor-pointer" />
                                    <MdOutlineRemoveRedEye className="text-lg hover:text-pink-600 cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Button buttonText="View All Products" variant="newBtn" />
                    </div>
                </section>
                <section className="container mx-auto py-8 px-4">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-6 h-10 bg-red-500 rounded-lg"></div>
                        <h1 className="text-red-500 text-2xl font-bold">Categories</h1>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Browse By Category</h2>
                        <div className="flex gap-4">
                            <FaArrowLeftLong className="cursor-pointer" />
                            <FaArrowRightLong className="cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex justify-center gap-4">
                        {categories.map(({ icon, label, active }, index) => (
                            <div
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-pressed={active ? true : false}
                                className={`cursor-pointer flex flex-col items-center justify-center border rounded-md w-60 h-60 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-600 ${active ? 'bg-pink-600 border-pink-600 text-white' : 'border-gray-300 text-black hover:border-gray-600'}`}
                            >
                                <div className="text-2xl mb-2">{icon}</div>
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="container mx-auto py-8 px-4">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-6 h-10 bg-red-500 rounded-lg"></div>
                        <h1 className="text-red-500 text-2xl font-bold">This Month</h1>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Best Selling Products</h2>
                        <Button buttonText="View All" variant="secondary" />
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[
                            { img: "/images/pinkcoart.png", title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160 },
                            { img: "/images/gucibag.avif", title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1480 },
                            { img: "/images/CDs.jpeg", title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400 },
                            { img: "/images/smallshelf.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400 },
                            { img: "/images/smallshelf.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400 }
                        ].map((product, idx) => (
                            <div key={idx} className="bg-white shadow rounded-2xl w-64 p-4 relative flex-shrink-0">
                                <div className="flex justify-center py-6">
                                    <Image src={product.img} alt={product.title} width={180} height={180} className="object-contain" />
                                </div>
                                <div className="font-semibold text-sm">{product.title}</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-pink-700 font-bold text-lg">${product.price}</span>
                                    <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <MdOutlineStar key={i} className="text-yellow-400 text-xl" />
                                    ))}
                                    <span className="text-gray-500 ml-2">(88)</span>
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <AiOutlineHeart className="text-lg hover:text-pink-600 cursor-pointer" />
                                    <MdOutlineRemoveRedEye className="text-lg hover:text-pink-600 cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="container mx-auto py-8 px-4">
                    <div className="bg-black text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
                        <div className="space-y-6 text-center md:text-left max-w-md">
                            <p className="text-green-500 font-semibold">Categories</p>
                            <h1 className="text-4xl font-bold leading-tight">Enhance Your Music Experience</h1>
                            <div className="flex justify-center md:justify-start space-x-4">
                                {['23:Hours', '05:Days', '59:Minutes', '35:Seconds'].map((time, idx) => (
                                    <div key={idx} className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                                        <span className="text-lg font-bold">{time.split(':')[0]}</span>
                                        <span className="text-xs uppercase">{time.split(':')[1]}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-6 py-3 font-semibold transition">
                                Buy Now!
                            </button>
                        </div>
                        <Image src="/images/speaker.jpg" alt="JBL Speaker" width={400} height={400} className="object-contain mt-8 md:mt-0" />
                    </div>
                </section>
            
                <section className="container mx-auto py-8 px-4">
                    <div className="flex  space-x-4 mb-6">
                        <div className="w-6 h-10 bg-red-500 rounded-lg"></div>
                        <h1 className="text-red-500 text-2xl font-bold">Our Products</h1>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Explore Our Products</h2>
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[
                            { img: "/images/pinkcoart.png", title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160 },
                            { img: "/images/gucibag.avif", title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1480 },
                            { img: "/images/CDs.jpeg", title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400 },
                            { img: "/images/smallshelf.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400 },
                            { img: "/images/smallshelf.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400 }
                        ].map((product, idx) => (
                            <div key={idx} className="bg-white shadow rounded-2xl w-64 p-4 relative flex-shrink-0">
                                <div className="flex justify-center py-6">
                                    <Image src={product.img} alt={product.title} width={180} height={180} className="object-contain" />
                                </div>
                                <div className="font-semibold text-sm">{product.title}</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-pink-700 font-bold text-lg">${product.price}</span>
                                    <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <MdOutlineStar key={i} className="text-yellow-400 text-xl" />
                                    ))}
                                    <span className="text-gray-500 ml-2">(88)</span>
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <AiOutlineHeart className="text-lg hover:text-pink-600 cursor-pointer" />
                                    <MdOutlineRemoveRedEye className="text-lg hover:text-pink-600 cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[
                            { img: "/images/gamepad.jpg", title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: "-40%" },
                            { img: "/images/keyboard.jpeg", title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1480, discount: "-35%" },
                            { img: "/images/tvshop.png", title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: "-30%" },
                            { img: "/images/chairecommerce.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%" },
                            { img: "/images/chairecommerce.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%" }
                        ].map((product, idx) => (
                            <div key={idx} className="bg-white shadow rounded-2xl w-64 p-4 relative flex-shrink-0">
                                <span className="absolute top-4 left-4 px-2 py-0.5 bg-green-600 text-xs text-white rounded font-bold">{product.discount}</span>
                                <div className="flex justify-center py-6">
                                    <Image src={product.img} alt={product.title} width={150} height={150} className="object-contain" />
                                </div>
                                <div className="font-semibold text-sm">{product.title}</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-pink-700 font-bold text-lg">${product.price}</span>
                                    <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <MdOutlineStar key={i} className="text-yellow-400 text-xl" />
                                    ))}
                                    <span className="text-gray-500 ml-2">(88)</span>
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <AiOutlineHeart className="text-lg hover:text-pink-600 cursor-pointer" />
                                    <MdOutlineRemoveRedEye className="text-lg hover:text-pink-600 cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Button buttonText="View All Products" variant="newBtn" />
                    </div>
                </section>
                {/* Featured Products Section */}
                <div className=" ml-0">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-6 h-10 bg-red-500 rounded-lg"></div>
                        <h1 className="text-red-500 text-2xl font-bold">Featured</h1>
                    </div>
                    <h2 className="text-2xl font-bold">Explore Our Products</h2>
                </div>

                <section className="container mx-auto py-8 px-4">

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative rounded-lg overflow-hidden shadow h-200">
                            <Image src="/images/speakers.webp" alt="PlayStation 5" width={400} height={200} className="w-full h-full object-cover" />
                            <div className="absolute bottom-5 left-5 text-white">
                                <h2 className="text-2xl font-semibold">PlayStation 5</h2>
                                <p className="mb-2">Black and White version of the PS5 coming out on sale</p>
                                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Shop Now</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-200">
                            <div className="relative rounded-lg overflow-hidden shadow col-span-2">
                                <Image src="/images/prettywoman.avif" alt="Woman Collection" width={200} height={50} className="w-full h-full object-cover" />
                                <div className="absolute bottom-5 left-5 text-white">
                                    <h2 className="text-xl font-semibold">Woman</h2>
                                    <p className="mb-2">Featured woman collections that give you another vibe</p>
                                    <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Shop Now</button>
                                </div>
                            </div>
                            <div className="relative rounded-lg overflow-hidden shadow">
                                <Image src="/images/cylindricalspeakers.avif" alt="Speakers" width={100} height={50} className="w-full h-full object-cover" />
                                <div className="absolute bottom-5 left-5 text-white">
                                    <h2 className="text-lg font-semibold">Speakers</h2>
                                    <p className="mb-2">Amazon wireless speakers</p>
                                    <button className="bg-white text-black px-3 py-1 rounded text-xs hover:bg-gray-200">Shop Now</button>
                                </div>
                            </div>
                            <div className="relative rounded-lg overflow-hidden shadow">
                                <Image src="/images/perfume.webp" alt="Perfume" width={100} height={50} className="w-full h-full object-cover" />
                                <div className="absolute bottom-5 left-5 text-white">
                                    <h2 className="text-lg font-semibold">Perfume</h2>
                                    <p className="mb-2">GUCCI INTENSE OUD EDP</p>
                                    <button className="bg-white text-black px-3 py-1 rounded text-xs hover:bg-gray-200">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
}