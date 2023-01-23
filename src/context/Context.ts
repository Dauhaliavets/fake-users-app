import { createContext } from 'react'

import { IContext } from '../models/ContextModel'

const Context = createContext<IContext>({
  users: [],
  seed: '',
  locale: '',
  errorChance: 0,
  setUsers: () => [],
  setSeed: () => '',
  setLocale: () => '',
  setErrorChance: () => 0,
})

export { Context }
