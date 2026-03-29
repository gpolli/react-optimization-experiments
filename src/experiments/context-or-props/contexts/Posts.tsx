'use client'

import { createContext } from 'react'

import { Card, CardContent, CardHeader } from '@/shadcn/card'
import { Skeleton } from '@/shadcn/skeleton'

import { useGetPosts } from '../hooks/useGetPosts'
import { useRenderMonitoring } from '../hooks/useRenderMonitoring'
import { Data, Providers } from '../types/interfaces'

export const PostsContext = createContext<Data.PostsContext>({
  countDisplayRef: { current: null },
  nodeRef: null,
  posts: [],
})

export const PostsProvider: Providers.Posts = ({ children }) => {
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
    <PostsContext.Provider value={{ countDisplayRef, nodeRef, posts: posts.data }}>
      {children}
    </PostsContext.Provider>
  )
}
