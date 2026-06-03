import React from 'react'

function Newsletterbox() {

    // Form Submit Handler
    const Onsubmithandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='text-center'>

            {/* Main Heading */}
            <p className='text-2xl font-medium text-gray-800'>
                Join now & save 20%
            </p>

            {/* Sub Heading */}
            <p className='text-gray-400 mt-3'>
                Be the first to know about new arrivals and exclusive offers.
            </p>

            {/* Newsletter Form */}
            <form
                onSubmit={Onsubmithandler}
                className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
            >

                {/* Email Input Field */}
                <input
                    type="email"
                    placeholder='Enter Email Here'
                    className='w-full sm:flex-1 outline-none'
                    required
                />

                {/* Submit Button */}
                <button
                    className='bg-black text-white text-sm md:text-xl px-10 py-1 pointer-cursor'
                    type='submit'
                >
                    Join Us
                </button>

            </form>

        </div>
    )
}

export default Newsletterbox