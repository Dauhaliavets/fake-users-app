import { createContext } from 'react'

import { IContext } from '../models/ContextModel'

const Context = createContext<IContext>({
  users: [],
  seed: '',
  locale: '',
  setUsers: () => [],
  setSeed: () => '',
  setLocale: () => '',
})

export { Context }
