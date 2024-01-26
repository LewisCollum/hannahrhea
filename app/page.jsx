'use client'
import { Button, Link, Text } from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function Home() {
    return (
        <body>
            <div class="flex text-center justify-center items-center h-full mx-10">
                <p class="font-quote text-3xl">
                    hoes do be hoes...
                </p>
            </div>
            <div class="fixed bottom-8 justify-items-center right-50 w-full grid grid-rows-1 gap-1">
                <div class="grid grid-cols-2 gap-2">
                    <Button
                        radius="full"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9t5WBsIitqvUhGMbhjB4X5pGDnVnOEOYWMTcdrFAiK-10EQ/viewform?usp=sf_link"
                        as={Link}
                        variant="ghost"
                    >
                        <div class="font-roboto">rsvp</div>
                    </Button>
                    <Button
                        radius="full"
                        href="https://pin.it/57QXaHAB9"
                        as={Link}
                        variant="ghost"
                    >
                        <div class="font-roboto"><FontAwesomeIcon icon={faPinterest} /></div>
                    </Button>
                    </div>
            </div>
        </body>
    )
}
