import Image from "next/image";
import Button from "./sharedComponent/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRemoveRedEye, MdOutlineStar } from "react-icons/md";
import { FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md"

const Home = () => {
    const categories = [
        { icon: <FaMobileAlt />, label: 'Phones' },
        { icon: <FaDesktop />, label: 'Computers' },
        { icon: <FaCamera />, label: 'Camera', active: true },
        { icon: <FaHeadphones />, label: 'HeadPhones' },
        { icon: <FaGamepad />, label: 'Gaming' },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50">
            <div className="container mx-auto flex flex-col md:flex-row  py-8 px-4">
                <aside className=" md:w-1/4 ">
                    <ul className="space-y-4 text-lg mt-3 ml-4">
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
                                {index < 2 ? `${item} >` : item}
                            </li>
                        ))}
                    </ul>
                </aside>
                {/* <div className="h-100  w-0.5 bg-gray-300 mr-10 mt-[-32px] " ></div> */}
                <section className="w-full md:w-3/4">
                    <div className="bg-black rounded-xl ">
                        <div className="bg-black rounded-xl flex flex-col md:flex-row items-center justify-between px-8 py-10 relative">
                            <div className="text-center md:text-left">
                                <div className="flex gap-3">
                                    <Image src={"/images/apple.svg"} alt="Apple image" width={40} height={20} />
                                    <h2 className="text-white text-md font-semibold mt-4">iPhone 14 Series</h2>
                                </div>

                                <h1 className="text-5xl font-bold text-white mb-4 w-70">Up to 10% off Voucher</h1>
                                <button className=" text-white font-semibold px-1 py-2  hover:bg-gray-200  border-b-2">
                                    Shop Now &rarr;
                                </button>
                            </div>
                            <Image
                                src="/images/iphone.jpg"
                                alt="iPhone 14"
                                width={510}
                                height={610}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex justify-center space-x-1">
                            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                            <span className="w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        </div>
                    </div>
                </section>
            </div>
            <section className="container m-auto py-8 px-4">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-4 h-8 bg-red-500 rounded-md"></div>
                    <h1 className="text-red-500 text-md font-bold">Todays</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex gap-8">
                        <h2 className="text-3xl font-bold">Flash Sales</h2>
                        <div className="flex gap-2 ml-14">
                            {['03:Days', '23:Hours', '19:Minutes', '56:Seconds'].map((time, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <span className="text-xs text-gray-400">{time.split(':')[1]}</span>
                                    <span className="text-black text-2xl font-bold">{time.split(':')[0]}:</span>
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
                    ].map((product, idx) => (
                        <div key={idx} className="bg-white shadow rounded-2xl w-84 p-4 relative flex-shrink-0">
                            <span className="absolute top-4 left-4 px-2 py-0.5 bg-pink-600 text-xs text-white rounded font-bold">{product.discount}</span>
                            <div className="flex justify-center py-6">
                                <Image src={product.img} alt={product.title} width={200} height={200} className="object-contain ml-5" />
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
                    <div className="w-4 h-8 bg-red-500 rounded-md"></div>
                    <h1 className="text-red-500 text-md font-bold">Categories</h1>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Browse By Category</h2>
                    <div className="flex gap-4">
                        <FaArrowLeftLong className="cursor-pointer" />
                        <FaArrowRightLong className="cursor-pointer" />
                    </div>
                </div>
                <div className="flex justify-center gap-17">
                    {categories.map(({ icon, label, active }, index) => (
                        <div
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-pressed={active ? true : false}
                            className={`cursor-pointer flex flex-col items-center justify-center border rounded-md w-40 h-40 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-600 ${active ? 'bg-pink-600 border-pink-600 text-white' : 'border-gray-300 text-black hover:border-gray-600'}`}
                        >
                            <div className="text-2xl mb-2">{icon}</div>
                            <span className="text-sm font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="container mx-auto py-8 px-4">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-4 h-8 bg-red-500 rounded-md"></div>
                    <h1 className="text-red-500 text-md font-bold">This Month</h1>
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
                        { img: "/images/smallshelf.jpg", title: "S-Series Comfort Chair", price: 375, oldPrice: 400 }
                    ].map((product, idx) => (
                        <div key={idx} className="bg-white shadow rounded-2xl w-84 p-4 relative flex-shrink-0">
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
                <div className="bg-black text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-center gap-9">
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
                    <Image src="/images/newspeaker.svg" alt="JBL Speaker" width={750} height={750} className="object-contain mt-8 md:mt-0" />
                </div>
            </section>

            <section className="container mx-auto py-8 px-4">
                <div className="flex  space-x-4 mb-6">
                    <div className="w-4 h-8 bg-red-500 rounded-md"></div>
                    <h1 className="text-red-500 text-md font-bold">Our Products</h1>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Explore Our Products</h2>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-4">
                    {[
                        { img: "/images/book.svg", title: "HAVIT HV-G92 Gamepad", price: 120 },
                        { img: "/images/camera.svg", title: "AK-900 Wired Keyboard", price: 960 },
                        { img: "/images/ipad.svg", title: "IPS LCD Gaming Monitor", price: 370 },
                        { img: "/images/vitamin.jpg", title: "S-Series Comfort Chair", price: 375 }
                    ].map((product, idx) => (
                        <div key={idx} className="bg-white shadow rounded-2xl w-84 p-4 relative flex-shrink-0">
                            <div className="flex justify-center py-6">
                                <Image src={product.img} alt={product.title} width={180} height={180} className="object-contain" />
                            </div>
                            <div className="font-semibold text-sm">{product.title}</div>
                            <div className="flex">
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-pink-700 font-bold text-lg">${product.price}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <MdOutlineStar key={i} className="text-yellow-400 text-xl" />
                                    ))}
                                    <span className="text-gray-500 ml-2">(88)</span>
                                </div>
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
                        { img: "/images/benze.svg", title: "Kids Electric Car", price: 120, discount: "-40%" },
                        { img: "/images/sportsshoes.svg", title: "Jr. Zoom Soccer Cleats", price: 960, discount: "-35%" },
                        { img: "/images/gamepad.svg", title: "GP11 Shooter USD Gamepad", price: 370, discount: "-30%" },
                        { img: "/images/coat.svg", title: "Quilted Satin Jacket", price: 375, discount: "-25%" },

                    ].map((product, idx) => (
                        <div key={idx} className="bg-white shadow rounded-2xl w-84 p-4 relative flex-shrink-0">
                            <span className="absolute top-4 left-4 px-2 py-0.5 bg-green-600 text-xs text-white rounded font-bold">{product.discount}</span>
                            <div className="flex justify-center ">
                                <Image src={product.img} alt={product.title} width={150} height={150} className="object-contain" />
                            </div>
                            <div className="font-semibold text-sm">{product.title}</div>
                            <div className="flex">
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-pink-700 font-bold text-lg">${product.price}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <MdOutlineStar key={i} className="text-yellow-400 text-xl" />
                                    ))}
                                    <span className="text-gray-500 ml-2">(88)</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <Button buttonText="View All Products" variant="newBtn" />
                </div>
            </section>
            <section className="container mx-auto py-8 px-4">
                <div className="flex  space-x-4 mb-6">
                    <div className="w-4 h-8 bg-red-500 rounded-md"></div>
                    <h1 className="text-red-500 text-md font-bold">Featured</h1>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">New Arrival</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative rounded-lg overflow-hidden shadow h-200 bg-black">
                        <Image src="/images/speakernew.svg" alt="PlayStation 5" width={400} height={200} className="w-full h-full object-cover" />
                        <div className="absolute bottom-5 left-5 text-white">
                            <h2 className="text-2xl font-semibold">PlayStation 5</h2>
                            <p className="mb-2">Black and White version of the PS5 coming out on sale</p>
                            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Shop Now</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-200">
                        <div className="relative rounded-lg overflow-hidden shadow col-span-2">
                            <Image src="/images/prettywomannew.svg" alt="Woman Collection" width={200} height={50} className="w-full h-full object-cover" />
                            <div className="absolute bottom-5 left-5 text-white">
                                <h2 className="text-xl font-semibold">Woman</h2>
                                <p className="mb-2">Featured woman collections that give you another vibe</p>
                                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Shop Now</button>
                            </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow bg-black">
                            <Image src="/images/cylinders.svg" alt="Speakers" width={100} height={50} className="w-full h-full object-cover" />
                            <div className="absolute bottom-5 left-5 text-white">
                                <h2 className="text-lg font-semibold">Speakers</h2>
                                <p className="mb-2">Amazon wireless speakers</p>
                                <button className="bg-white text-black px-3 py-1 rounded text-xs hover:bg-gray-200">Shop Now</button>
                            </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden shadow bg-black">
                            <Image src="/images/newperfume.svg" alt="Perfume" width={100} height={50} className="w-full h-full object-cover" />
                            <div className="absolute bottom-5 left-5 text-white">
                                <h2 className="text-lg font-semibold">Perfume</h2>
                                <p className="mb-2">GUCCI INTENSE OUD EDP</p>
                                <button className="bg-white text-black px-3 py-1 rounded text-xs hover:bg-gray-200">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center gap-76 mx-45 my-20">
                <div className="justify-center items-center">
                    <Image src="/images/Services.svg" alt="servives" width={100} height={50} />
                    <h2 className="font-bold">FREE AND FAST DELIVERY</h2>
                    <p className="text-xs">Free delivery for all orders over $140</p>
                </div>
                <div>
                    <Image src="/images/Services (1).svg" alt="servives" width={100} height={50} />
                    <h2 className="font-bold">24/7 CUSTOMER SERVICE</h2>
                    <p className="text-xs">Friendly 24/7 customer support</p>
                </div>
                <div>
                    <Image src="/images/Services (2).svg" alt="servives" width={100} height={50} />
                    <h2 className="font-bold">MONEY BACK GUARANTEE</h2>
                    <p className="text-xs">We reurn money within 30 days</p>
                </div>
            </section>
            {/* <MdArrowUpward className=" ml-350 text-3xl mt-10" /> */}
        </div>
    );
}
export default Home;