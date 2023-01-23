import { Dispatch, SetStateAction } from 'react'

import { IUser } from './UserModel'

interface IContext {
  users: IUser[]
  seed: string
  locale: string
  errorChance: number
  setUsers: Dispatch<SetStateAction<IUser[]>>
  setSeed: Dispatch<SetStateAction<string>>
  setLocale: Dispatch<SetStateAction<string>>
  setErrorChance: Dispatch<SetStateAction<number>>
}
export type { IContext }
