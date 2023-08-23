'use client';

import Link from "next/link"
import Image from "next/image"
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;

    return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image
            src="/assets/images/logo.svg"
            alt="Promtopia logo"
            width={30}
            height={30}
            className="object-contain"
            />
            <p className="logo_text">Prom  ptopia</p>
        </Link>

        <button type="button" onClick={signOut}
        className="outline_btn">
            Sign Outt

        </button>

        <Link href="/profile">
            <Image
            src="/assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            >

            </Image>
        </Link>

        {/* {Mobile Navigation} */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt"
                    className="black_btn">
                    Create post
                    </Link>
                </div>
            ): (
                <>
                
                </>
            )}
        </div>
    </nav>
    )
}

export default Nav