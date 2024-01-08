import Link from 'next/link'
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function NotFound() {
    // console.log('error')
return (
    <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex flex-col items-center justify-center text-center'>
            <HiOutlineExclamationCircle className='text-red-500 text-[100px]'/>
            <h2 style={{color: 'red'}}>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link className='text-blue-500 underline' href="/">Return Home</Link>
        </div>
    </div>
)
}