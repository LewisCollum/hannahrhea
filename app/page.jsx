'use client'
import { Button, Link, Image } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <body>
            <div class="flex text-center justify-center items-center h-full mx-10">
                <div class="grid grid-rows-1 gap-8 justify-items-center">
                    <div class="font-cursive text-large">twenty</div>
                    <div class="font-cursive text-medium">one</div>
                    <Image
                        width={300}
                        alt="NextUI hero Image"
                        src="/bow.png"
                    />
                    <Button
                        radius="full"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9t5WBsIitqvUhGMbhjB4X5pGDnVnOEOYWMTcdrFAiK-10EQ/viewform?usp=sf_link"
                        as={Link}
                        size="lg"
                        color="primary"
                        className="shadow-xl"
                    >
                        <div class="font-cursive text-small">rsvp</div>
                    </Button>
                    <Button
                        radius="full"
                        href="https://pin.it/57QXaHAB9"
                        as={Link}
                        isIconOnly
                        color="primary"
                        className="shadow-xl"
                    >
                        <FontAwesomeIcon icon={faPinterest} size="2xs" style={{color: "white",}}/>
                    </Button>
                </div>
            </div>
        </body>
    )
}
