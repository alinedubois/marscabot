import React from 'react'
import { Text, Reply } from '@botonic/react'

export default function Welcome() {
    return(
        <>
        <Text>Welcome dear Martian!</Text>
        <Text>I'm here to be your guide on your Mars journey. What do you want to do ? I can give you advices about the different circuits or help you book the one you chose.
            <Reply payload="advice">Advices about a circuit</Reply>
            <Reply payload="book">Book a circuit</Reply>
        </Text>
      </>
    )
} 