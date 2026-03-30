import { Card, CardContent } from '@/shadcn/card'

import { useRenderMonitoring } from '../hooks/useRenderMonitoring'
import { Components } from '../types/interfaces'

export const ExpensiveTree: Components.ExpensiveTree = () => {
  const { countDisplayRef, nodeRef } = useRenderMonitoring()

  return (
    <Card className="w-full rounded-lg border-2 bg-gray-700 px-2 py-2" ref={nodeRef}>
      <CardContent className="flex flex-row items-center gap-x-4">
        <p className="text-l font-mono font-bold text-gray-300">Expensive Tree</p>
        <div className="text-l w-min rounded bg-gray-600 p-1 font-mono font-bold text-gray-300">
          <span ref={countDisplayRef}>x0</span>
        </div>
      </CardContent>
    </Card>
  )
}
