import Fakerator from 'fakerator'
import seedrandom from 'seedrandom'
import { Context } from '../context/Context'
import { useContext } from 'react'

const useGenerator = () => {
  const { seed, locale, setUsers } = useContext(Context)
  const fakerator = Fakerator(locale)

  const generateCountUsers = (count) => {
    fakerator.seed(Number(seed))
    const generatorSeed = seedrandom.alea(seed)

    const newUsers = []

    for (let i = 0; i < count; i++) {
      const isMale = fakerator.random.boolean()
      const fullName = isMale
        ? `${fakerator.names.firstNameM()} ${fakerator.names.lastNameM()}`
        : `${fakerator.names.firstNameF()} ${fakerator.names.lastNameF()}`
      const address = `${fakerator.address.altitude()}, ${fakerator.address.city()}, ${fakerator.address.street()}`
      const phone = fakerator.phone.number()

      const newUser = {
        seed: generatorSeed(),
        fullName,
        address,
        phone,
      }

      newUsers.push(newUser)
    }

    setUsers(newUsers)
  }

  return {
    generateCountUsers,
  }
}

export { useGenerator }
