'use client'

import { ElementA } from './components/ElementA'
import { ElementB } from './components/ElementB'
import { ExpensiveTree } from './components/ExpensiveTree'

export const LiftingChildrenUpPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-x-4 bg-gray-900 font-mono text-white">
      <h1 className="w-full py-4 text-center">Experiment 02 - Lifting Children Up</h1>
      <div className="flex flex-row justify-between gap-x-4">
        <ElementA />
        <ElementB>
          <ExpensiveTree />
        </ElementB>
      </div>
    </div>
  )
}
