import { Card, Col, Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";

const artSrc = [
    "https://nextui.org/images/card-example-4.jpeg",
    "https://nextui.org/images/card-example-3.jpeg",
    "https://nextui.org/images/card-example-4.jpeg",
    "https://nextui.org/images/card-example-3.jpeg",
]

export const ArtImages = () => {
    return (
        <div>
            {artSrc.map((item, index) => (
                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} sm={5}>
                        <Card css={{ w: "100%" }}>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Col>
                                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        What to watch
                                    </Text>
                                    <Text h4 color="white">
                                        Stream the Acme event
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Image
                                key={item}
                                src={item}
                                objectFit="cover"
                                width="100%"
                                height={340}
                                alt="Card image background"
                            />
                        </Card>
                    </Grid>
                </Grid.Container>
            ))}
        </div>
    )
}