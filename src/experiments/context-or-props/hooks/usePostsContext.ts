import { useContext } from 'react'

import { PostsContext } from '../contexts/Posts'
import { Hooks } from '../types/interfaces'

export const usePostsContext: Hooks.UsePostsContext = () => {
  const context = useContext(PostsContext)

  if (!context) {
    throw new Error('usePostsContext must be used within a PostsProvider')
  }

  return context
}
