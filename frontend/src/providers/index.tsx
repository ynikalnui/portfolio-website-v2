'use client'

import type { ReactNode } from 'react'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support'
import { client } from '@/lib/apollo'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={() => client}>
      {children}
    </ApolloNextAppProvider>
  )
}
