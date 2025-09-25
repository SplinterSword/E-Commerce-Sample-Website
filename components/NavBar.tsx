'use client'

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/cartStore";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const router = useRouter();

    return (
        <nav className="flex justify-center h-20 fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center w-[95%] h-full">
                <ul className="flex gap-10 justify-center items-center">
                    <li onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)} className={`transition-all duration-300 ${isHovered === null ? 'text-white' : isHovered === 1 ? 'text-white' : 'text-white/30'} cursor-pointer`} onClick={() => router.push('/')} >Home</li>
                    <li onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(null)} className={`transition-all duration-300 ${isHovered === null ? 'text-white' : isHovered === 2 ? 'text-white' : 'text-white/30'} cursor-pointer`} onClick={() => router.push('/products')} >Products</li>
                    <li onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(null)} className={`transition-all duration-300 ${isHovered === null ? 'text-white' : isHovered === 3 ? 'text-white' : 'text-white/30'} cursor-pointer`} onClick={() => router.push('/categories')} >Categories</li>
                    <li onMouseEnter={() => setIsHovered(4)} onMouseLeave={() => setIsHovered(null)} className={`transition-all duration-300 ${isHovered === null ? 'text-white' : isHovered === 4 ? 'text-white' : 'text-white/30'} cursor-pointer`} onClick={() => router.push('/brands')} >Brands</li>
                    <li onMouseEnter={() => setIsHovered(5)} onMouseLeave={() => setIsHovered(null)} className={`transition-all duration-300 ${isHovered === null ? 'text-white' : isHovered === 5 ? 'text-white' : 'text-white/30'} cursor-pointer`} onClick={() => router.push('/discounts')} >Discounts</li>
                    <li onMouseEnter={() => setIsHovered(6)} onMouseLeave={() => setIsHovered(null)} className={`transition-all duration-300 ${isHovered === null ? 'text-white' : isHovered === 6 ? 'text-white' : 'text-white/30'} cursor-pointer`} onClick={() => router.push('/orders')} >Orders</li>
                </ul>
                <ul className="flex justify-end items-center w-[20%] h-2/3">
                    <li className="relative group">
                        <button onClick={() => router.push('/cart')} className="bg-white/10 backdrop-blur-md h-12 w-32 rounded-full border border-white/20 flex items-center justify-center gap-2 text-white/90 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-10 0h10m0 0a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                            <span>Cart</span>
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                              {useSelector((state: RootState) => state.cart.items.length)}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}