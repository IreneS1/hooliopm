import { Navbar, Link, Text, Dropdown } from "@nextui-org/react";
import Image from 'next/image';
import InstagramIcon from '../public/images/InstagramIcon.png'

function Nav() {

    const collapseItems = [
        "Home",
        "DJ",
        "Art",
        "Contact",
    ];

    return (
        <>
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="warning"
                    hideIn="xs"
                    variant="highlight"
                >
                    <Navbar.Link isActive href="#">Home</Navbar.Link>
                    <Navbar.Link href="#">DJ Services</Navbar.Link>
                    <Navbar.Link href="#">Art</Navbar.Link>
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
                    <Link href="instagram.com">
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
                                key={item}
                                activeColor="primary"
                                // css={{
                                //     color: index === collapseItems.length - 1 ? "$error" : "",
                                // }}
                                isActive={index === 2}
                            >
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href={item}
                                >
                                    {item}
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