'use client'

import { ContainerA } from './containers'
import { ContainerB } from './containers'
import { PostsProvider } from './contexts/Posts'

export const ContextOrPropsPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-x-4 bg-gray-900 font-mono text-white">
      <h1 className="w-full py-4 text-center">Experiment 01 - Context or Props?</h1>
      <div className="flex flex-row justify-between gap-x-4">
        <ContainerA />
        <PostsProvider>
          <ContainerB />
        </PostsProvider>
      </div>
    </div>
  )
}
