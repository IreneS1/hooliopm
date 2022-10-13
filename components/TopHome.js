import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/TopHome.module.css'
import { Text } from "@nextui-org/react";
import arrowDown from '../public/images/arrowDown.png'
import { ArtImages } from './ArtImages';

function TopHome() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.landingImage}>
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $green600 -20%, $blue600 50%",
                            textAlign: "center",
                            padding: "10px",
                            marginTop: "100px",
                        }}
                        weight="light"
                    >
                        Welcome
                    </Text>
                    <Text
                        h4
                        size={60}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $green600 50%",
                            textAlign: "center",
                        }}
                        weight="hairline"
                    >
                        <Link href="/Contact">Contact Me</Link>
                    </Text>


                    <h3>More text</h3>
                    <br />
                    <div className={styles.arrowDown}>
                        <Image
                            priority
                            src={arrowDown}
                            alt='down-arrow'
                            width={90}
                            height={90}

                        />
                    </div>
                </div>
            </div>
            <ArtImages />
        </>
    )
}

export default TopHome