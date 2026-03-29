import { Post } from '@/graphql-types'

import { PostsContext } from './data'

export type UsePostsContext = () => PostsContext

export type UseGetPosts = () =>
  | { status: 'ERROR'; error: Error }
  | { status: 'SUCCESS'; data: Pick<Post, 'id' | 'title'>[] }
  | { status: 'LOADING' }
