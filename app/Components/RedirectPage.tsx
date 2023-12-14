'use client'

import {useEffect} from 'react'
import { useRouter } from 'next/navigation'

const RedirectPage = () => {

    const router = useRouter()

    useEffect(() => {
        router.replace('/dashboard')
    }, [])
    

    return (
        <></>
    )
}

export default RedirectPage