import React, { FC } from 'react'

import { Post } from '@/graphql-types'

export type ContainerB = FC

export type Root = FC<{
  children: React.ReactNode
  name: string
  ref: React.Ref<HTMLDivElement>
  renderCount: number
}>

export type ChildLevel1 = FC<{
  data?: Pick<Post, 'id' | 'title'>[]
  dataTransferMode: 'context' | 'props'
}>

export type ChildLevel2 = FC<{ data?: Pick<Post, 'id' | 'title'>[] }>

export type PostsTable = FC<{ data: Pick<Post, 'id' | 'title'>[] }>
