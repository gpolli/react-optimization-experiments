import { Post } from '@/graphql-types'

export interface PostsContext {
  nodeRef: React.Ref<HTMLDivElement>
  posts: Post[]
  renderCount: number
}
