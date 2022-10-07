import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import HomeImage from '../public/images/hooliopmHome.jpg'
import styles from '../styles/TopHome.module.css'

function TopHome() {
    const [loading, isLoading] = React.useState('true');

    return (
        <div className={styles.container}>
            <div className={styles.landingImage}>
                {/* <Image
                className={styles.landingImage}
                src={HomeImage}
                alt='Home page image'
                priority
                placeholder={!isLoading ? 'blur' : 'empty'}
                objectFit='cover'
                objectPosition='center'
            /> */}
                <h1>Welcome</h1>
                <h2 >
                    <Link href="/Contact">Contact page!</Link>
                </h2>
                <h3>More text</h3>
                <br />
            </div>
        </div>
    )
}

export default TopHome