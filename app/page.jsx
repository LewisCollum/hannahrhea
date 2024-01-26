'use client'
import { Button, Link, Image } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function Home() {
    return (
        <body>
            <div class="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars/>
                </Canvas>
            </div>
            <div class="flex text-center justify-center items-center h-full mx-10">
                <div class="grid grid-rows-1 gap-6 justify-items-center">
                    <div class="font-cursive text-large">twenty</div>
                    <div class="font-cursive text-medium">one</div>
                    <Image
                        width={150}
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

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
