import { Navbar, Link, Text, Dropdown } from "@nextui-org/react";
import Image from 'next/image';
import InstagramIcon from '../public/images/InstagramIcon.png'
import React from "react";

function Nav() {
    const [currentPage, setCurrentPage] = React.useState("Home");

    const collapseItems = [
        {
            page: "Home",
            link: "/",
        },
        {
            page: "DJ",
            link: "/",
        },
        {
            page: "Art",
            link: "/",
        },
        {
            page: "Contact",
            link: "/Contact",
        },
    ];

    return (
        <>
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="primary"
                    hideIn="xs"
                    variant="highlight-solid-rounded"
                >
                    <Navbar.Link isActive href="/">Home</Navbar.Link>
                    <Navbar.Link href="/">DJ Services</Navbar.Link>
                    <Navbar.Link href="/">Art</Navbar.Link>
                    <Navbar.Link href="/Contact">Contact</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    {/* Add hoolio's instagram shortcut here */}
                    <Link href="www.instagram.com">
                        <Image
                            src={InstagramIcon}
                            alt='instagram-icon-hoolio'
                            width={35}
                            height={30}
                        />
                    </Link>

                    <Navbar.Collapse disableAnimation>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem
                                key={item.page}
                                activeColor="primary"
                                // css={{
                                //     color: index === collapseItems.length - 1 ? "$error" : "",
                                // }}
                                isActive={index == 2}
                            >
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href={item.link}
                                >
                                    {item.page}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>
                </Navbar.Content>
            </Navbar>
        </>
    )
}

export default Nav