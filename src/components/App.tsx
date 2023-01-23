import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { DEFAULT_ERROR_CHANCE, DEFAULT_LOCALE, DEFAULT_SEED } from '../constants/global'
import { Context } from '../context/Context'
import { IUser } from '../models/UserModel'
import UsersTable from './table/UsersTable'
import ToolBar from './toolBar/ToolBar'

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [seed, setSeed] = useState<string>(DEFAULT_SEED)
  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE)
  const [errorChance, setErrorChance] = useState<number>(DEFAULT_ERROR_CHANCE)

  return (
    <Context.Provider
      value={{
        users,
        seed,
        locale,
        errorChance,
        setUsers,
        setSeed,
        setLocale,
        setErrorChance,
      }}
    >
      <div className='App'>
        <Container>
          <Row className='justify-content-md-center py-3'>
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
