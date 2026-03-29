import { Card, CardContent } from '@/shadcn/card'

import { Components } from '../types/interfaces'

export const Root: Components.Root = ({ children, countDisplayRef, name, ref }) => {
  return (
    <Card className="w-full flex-1 rounded-lg border-2 bg-gray-800 px-2 py-2" ref={ref}>
      <CardContent>
        <div className="flex flex-row items-center justify-between py-4">
          <p className="font-mono text-gray-300">{name.toUpperCase()}</p>
          <div className="text-l rounded bg-gray-700 p-1 font-mono font-bold text-gray-300">
            <span ref={countDisplayRef}>x0</span>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  )
}
