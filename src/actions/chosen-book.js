import React from 'react'
import { Text, Reply } from '@botonic/react'

export default function Book() {
    return(
        <Text>You chose your circuit ? Nice ! Which circuit did you choose ?
            <Reply payload="circuit">Mont Olympe</Reply>
            <Reply payload="circuit">Mont Elysium</Reply>
            <Reply payload="circuit">Noctis Labyrinthus</Reply>
            <Reply payload="circuit">Mawrth Vallis</Reply>
            <Reply payload="circuit">Dunes Fantômes</Reply>
        </Text>
    )
}