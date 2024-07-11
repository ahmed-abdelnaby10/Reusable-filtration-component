import { FaHeart, FaShareAlt, FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product }) {
    return (
        <div className="border-2 border-solid border-border-color p-4 rounded-xl flex items-center justify-between gap-4 flex-col text-center bg-gray-50 relative z-20 select-none duration-300 hover:border-main-color hover:shadow-xl shadow-lg">
            <div className="flex flex-col items-center gap-4 w-full">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <div className="flex items-center gap-2 w-full justify-between"><span className="text-primary-color font-semibold">Category</span>{`${product.category}`}</div>
                <div className="flex items-center gap-2 w-full justify-between"><span className="text-primary-color font-semibold">Brand</span>{`${product.brand}`}</div>
                <div className="flex items-center gap-2 w-full justify-between"><span className="text-primary-color font-semibold">Price</span>{`$${product.price}`}</div>
            </div>
            <div className="flex items-center justify-start gap-4 flex-col w-full">
                <div className="flex items-center justify-between gap-2 w-4/5">
                    <button className="rounded-full flex items-center justify-center h-8 w-8 border border-solid border-main-color hover:bg-main-color bg-white text-black hover:text-white duration-300">
                        <FaShareAlt className="w-4 h-4"/>
                    </button>
                    <button className="rounded-full flex items-center justify-center h-8 w-8 border border-solid border-main-color hover:bg-main-color bg-white text-black hover:text-white duration-300">
                        <FaHeart className="w-4 h-4"/>
                    </button>
                    <button className="rounded-full flex items-center justify-center h-8 w-8 border border-solid border-main-color hover:bg-main-color bg-white text-black hover:text-white duration-300">
                        <FaCartPlus className="w-4 h-4"/>
                    </button>
                </div>
                <div className="flex items-center gap-4 w-full flex-col xl:flex-row">
                    <button className="bg-primary-color text-white p-2 w-full min-w-28 rounded hover:bg-primary-color/80 duration-300">Buy now</button>
                    <button className="bg-main-color text-white p-2 w-full min-w-28 rounded hover:bg-main-color/80 duration-300">More details</button>
                </div>
            </div>
        </div>
    )
}
