import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Context } from '../context/Context'
import { IUser } from '../models/UserModel'
import { Generator } from '../services/generator'
import UsersTable from './table/UsersTable'
import ToolBar from './toolBar/ToolBar'

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [seed, setSeed] = useState<string>('')
  const [locale, setLocale] = useState<string>('de-DE')

  useEffect(() => {
    const generator = new Generator(locale, seed)
    const generatedUsers = generator.getUsers()

    setUsers(generatedUsers)
  }, [seed, locale])

  return (
    <Context.Provider
      value={{
        users,
        seed,
        locale,
        setUsers,
        setSeed,
        setLocale,
      }}
    >
      <div className='App'>
        <Container>
          <Row className='justify-content-md-center'>
            <ToolBar />
          </Row>
          <Row className='justify-content-md-center'>
            <UsersTable />
          </Row>
        </Container>
      </div>
    </Context.Provider>
  )
}

export default App
