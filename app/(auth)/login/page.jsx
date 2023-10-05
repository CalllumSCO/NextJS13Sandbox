"use client"

import { useState } from 'react'
import AuthForm from '../AuthForm'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from 'next/navigation';


export default function Login() {
    const [error, setError] = useState();
    const router = useRouter();

    const handleSubmit = async (e, email, password) => {
        e.preventDefault()
        console.log(email, password)

        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            setError(error.message);
        } else {
            router.push('/')
        }
    }
    return (
        <>
            <h2 className="text-center">Log In</h2>
            <AuthForm handleSubmit={handleSubmit} />

            {error && (
                <div className='error'>{error}</div>
            )}
        </>
    )
}