import Link from 'next/link'


const NotFound = () => {
    return (
        <section className='flex flex-col  justify-center items-center h-screen '>
            <h2 className='font-bold'>Not Found</h2>
            <h3>Could not find requested resource</h3>
            <div>
                <Link href="/" className='bg-blue-200 border-2 border-blue-500  hover:bg-blue-700 text-blue-500 font-bold  focus:outline-none focus:shadow-outline hover:text-white mt-6 block select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-36'>Return Home</Link>
            </div>
        </section>
    )
}

export default NotFound