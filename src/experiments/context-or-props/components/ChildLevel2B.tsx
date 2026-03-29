import { Card, CardContent } from '@/shadcn/card'

import { usePostsContext } from '../hooks/usePostsContext'
import { useRenderMonitoring } from '../hooks/useRenderMonitoring'
import { Components } from '../types/interfaces'
import { PostsTable } from './Table'

export const ChildLevel2B: Components.ChildLevel2 = () => {
  const { countDisplayRef, nodeRef } = useRenderMonitoring()
  const { posts } = usePostsContext()

  return (
    <Card className="w-full rounded-lg border-2 bg-gray-600 px-2 py-2" ref={nodeRef}>
      <CardContent>
        <div className="flex flex-row items-center justify-between py-4">
          <p className="font-mono text-gray-300">Child - Level 2</p>
          <div className="text-l rounded bg-gray-500 p-1 font-mono font-bold text-gray-300">
            <span ref={countDisplayRef}>x0</span>
          </div>
        </div>

        {posts && <PostsTable data={posts} />}
      </CardContent>
    </Card>
  )
}
