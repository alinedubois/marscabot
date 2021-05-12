import React from 'react'
import { Text, Reply } from '@botonic/react'
import advice from './actions/chosen-advice'
import welcome from './actions/welcome'
import book from './actions/chosen-book'
import dates from './actions/chosen-dates'
import endingCircuit from './actions/ending-circuit'

export const routes = [
  {
    path: 'initial',
    text: /help/i,
    action: () => (
      <>
        <Text>Hello I'm MarscaBot!</Text>
        <Text>
        I'm here to be your guide on your Mars journey. Type start to receive some help.
        </Text>
      </>
    )
  },
{
    path: 'welcome',
    text: /Hi|Hello|start|Start/,
    action: welcome,
    childRoutes: [
        {
            path: 'chosen-advice',
            payload: 'advice',
            action: advice,
        }
      ,{
            path: 'chosen-book',
            payload: 'book',
            action: book,
            childRoutes: [
                {
                    path: 'chosen-date',
                    payload: 'circuit',
                    action: dates,
                    childRoutes: [
                        {
                            path: 'ending-circuit',
                            payload: 'date',
                            action: endingCircuit,
                        }
                    ]
                }
            ]
      }
    ]
}
  ]

