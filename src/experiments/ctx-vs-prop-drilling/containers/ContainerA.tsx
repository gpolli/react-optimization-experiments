'use client'

import { useGetPosts } from '../hooks/useGetPosts'

export const ContainerA = () => {
  const { data, isLoading, error } = useGetPosts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  console.log('posts: ', JSON.stringify(data))

  return <div>Success</div>
}
