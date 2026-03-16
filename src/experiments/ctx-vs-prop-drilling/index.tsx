import { ContainerA } from './containers'

export const Experiment1Page = () => {
  return (
    <div className="flex h-screen w-screen flex-col gap-x-4 bg-gray-900 font-mono text-white">
      <h1 className="w-full py-4 text-center">Experiment 01 - Rerender Propagation</h1>
      <ContainerA />
    </div>
  )
}
