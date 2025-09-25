'use client'

const Hero = () => {
    return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div id="hero" className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-white space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Discover the Perfect Style for Every Occasion
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                    Explore our curated collection of premium fashion and accessories
                </p>
                <div className="pt-6 space-x-4">
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
                        Shop Now
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero