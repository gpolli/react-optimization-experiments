'use client'

import { Card, CardContent, CardHeader } from '@/shadcn/card'
import { Skeleton } from '@/shadcn/skeleton'

import { ChildLeve1 } from '../components/ChildLevel1'
import { Root } from '../components/Root'
import { useGetPosts } from '../hooks/useGetPosts'
import { useRenderMonitoring } from '../hooks/useRenderMonitoring'

export const ContainerA = () => {
  const posts = useGetPosts()
  const { countDisplayRef, nodeRef } = useRenderMonitoring()

  if (posts.status === 'LOADING') {
    return (
      <Card className="w-full max-w-xs">
        <CardHeader>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="aspect-video w-full" />
        </CardContent>
      </Card>
    )
  }

  if (posts.status === 'ERROR') {
    return <div>Error: {posts.error.message}</div>
  }

  return (
    <Root countDisplayRef={countDisplayRef} name="Prop Drilling" ref={nodeRef}>
      <ChildLeve1 data={posts.data} dataTransferMode="props" />
    </Root>
  )
}
