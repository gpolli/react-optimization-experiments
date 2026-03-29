import { Post } from '@/graphql-types'

export interface PostsContext {
  countDisplayRef: React.RefObject<HTMLSpanElement | null>
  nodeRef: React.Ref<HTMLDivElement>
  posts: Post[]
}
