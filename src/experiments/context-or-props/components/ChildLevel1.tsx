import { Card, CardContent } from '@/shadcn/card'

import { useRenderMonitoring } from '../hooks/useRenderMonitoring'
import { Components } from '../types/interfaces'
import { ChildLevel2A } from './ChildLevel2A'
import { ChildLevel2B } from './ChildLevel2B'

export const ChildLeve1: Components.ChildLevel1 = ({ data, dataTransferMode }) => {
  const { countDisplayRef, nodeRef } = useRenderMonitoring()

  return (
    <Card className="w-full rounded-lg border-2 bg-gray-700 px-2 py-2" ref={nodeRef}>
      <CardContent>
        <div className="flex flex-row items-center justify-between py-4">
          <p className="font-mono text-gray-300">Child - Level 1</p>
          <div className="text-l rounded bg-gray-600 p-1 font-mono font-bold text-gray-300">
            <span ref={countDisplayRef}>x0</span>
          </div>
        </div>
        {dataTransferMode === 'props' && <ChildLevel2A data={data} />}
        {dataTransferMode === 'context' && <ChildLevel2B />}
      </CardContent>
    </Card>
  )
}
