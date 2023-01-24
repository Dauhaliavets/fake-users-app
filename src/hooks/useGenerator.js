import Fakerator from 'fakerator'
import seedrandom from 'seedrandom'
import { Context } from '../context/Context'
import { useContext } from 'react'
import { MIN_SEED_VALUE, MAX_SEED_VALUE } from '../constants/global.ts'

const useGenerator = () => {
  const { users, seed, locale, errorChance, setUsers, setSeed } = useContext(Context)
  const fakerator = Fakerator(locale)

  const getRoundedErrorChance = () => {
    const randomBool = fakerator.random.boolean()
    return randomBool ? Math.ceil(errorChance) : Math.floor(errorChance)
  }

  const setErrorsToString = (str, countErrors) => {
    let oString = str
    for (let i = 0; i < countErrors; i++) {
      const errorType = fakerator.random.number(1, 3)
      const randomInd = fakerator.random.number(0, oString.length - 1)

      switch (errorType) {
        case 1:
          {
            if (oString.length > 5) {
              oString = oString.slice(0, randomInd) + oString.slice(randomInd + 1)
            }
          }
          break
        case 2:
          {
            if (oString.length < 30) {
              const randomLetter = fakerator.random.letter()
              oString = oString.slice(0, randomInd) + randomLetter + oString.slice(randomInd)
            }
          }
          break
        case 3:
          {
            const [letterByInd, nextLetterByInd] = [oString[randomInd], oString[randomInd + 1]]
            const arrayFromString = oString.split('')

            arrayFromString[randomInd] = nextLetterByInd
            arrayFromString[randomInd + 1] = letterByInd

            oString = arrayFromString.join('')
          }
          break

        default:
          break
      }
    }

    return oString
  }

  const generateCountUsers = (count) => {
    fakerator.seed(Number(seed))
    const generatorSeed = seedrandom.tychei(seed)
    const newUsers = []

    const roundedErrorChance = getRoundedErrorChance()

    for (let i = 0; i < count; i++) {
      const isMale = fakerator.random.boolean()
      const fullName = isMale
        ? `${fakerator.names.firstNameM()} ${fakerator.names.lastNameM()}`
        : `${fakerator.names.firstNameF()} ${fakerator.names.lastNameF()}`
      const address = `${fakerator.address.altitude()}, ${fakerator.address.city()}, ${fakerator.address.street()}`
      const phone = fakerator.phone.number()

      const newUser = {
        seed: generatorSeed(),
        fullName: setErrorsToString(fullName, roundedErrorChance),
        address: setErrorsToString(address, roundedErrorChance),
        phone: setErrorsToString(phone, roundedErrorChance),
      }

      newUsers.push(newUser)
    }

    setUsers([...users, ...newUsers])
  }

  const generateRandomSeed = () => {
    const fakerator = Fakerator()
    const newSeed = fakerator.random.number(MIN_SEED_VALUE, MAX_SEED_VALUE)

    setSeed(String(newSeed))
  }

  return {
    generateCountUsers,
    generateRandomSeed,
  }
}

export { useGenerator }
