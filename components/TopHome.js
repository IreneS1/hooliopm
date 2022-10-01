import React from 'react'
import Link from 'next/link';
import { Container, Image } from "@nextui-org/react"
//import { HomeImage } from '../public/images/hooliopmHome'

function TopHome() {
    return (
        <Container>
            <Image
                src='../public/images/hooliopmHome.jpg'
                width={100}
                height={200}
            />
            <h1>Welcome</h1>
            <h2 className="title">
                <Link href="/Contact">Contact page!</Link>
            </h2>
        </Container>
    )
}

export default TopHome