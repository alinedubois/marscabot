import React from 'react'
import { Text, Reply } from '@botonic/react'

export default function Dates() {
    return(
        <Text>A very good choice indeed ! Now pick a date for your circuit !
            <Reply payload="date">25 Mai 2021</Reply>
            <Reply payload="date">11 Juin 2021</Reply>
        </Text>
    )
}