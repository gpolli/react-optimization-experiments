'use client'

import { useState } from 'react'

import { Button } from '@/shadcn/button'
import { Card, CardContent, CardHeader } from '@/shadcn/card'

import { useRenderMonitoring } from '../hooks/useRenderMonitoring'
import { Components } from '../types/interfaces'
import { ExpensiveTree } from './ExpensiveTree'

export const ElementA: Components.ElementA = () => {
  const { countDisplayRef, nodeRef } = useRenderMonitoring()
  const [count, setCount] = useState(1)

  return (
    <Card className="w-full rounded-lg border-2 bg-gray-700 px-2 py-2" ref={nodeRef}>
      <CardHeader className="text-l font-mono font-bold text-gray-300">Same Level</CardHeader>
      <CardContent className="flex flex-col items-center gap-y-4">
        <div className="text-l rounded bg-gray-600 p-1 font-mono font-bold text-gray-300">
          <span ref={countDisplayRef}>x0</span>
        </div>
        <p className="text-center text-sm text-gray-400">Counter: {count}</p>
        <Button variant="outline" className="w-full" onClick={() => setCount((count) => count + 1)}>
          Increment
        </Button>
        <ExpensiveTree />
      </CardContent>
    </Card>
  )
}
