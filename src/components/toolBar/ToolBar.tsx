import React, { ChangeEvent, useContext } from 'react'
import { CSVLink } from 'react-csv'
import { Button, Col, Form } from 'react-bootstrap'
import { Context } from '../../context/Context'
import { useGenerator } from '../../hooks/useGenerator'

function ToolBar() {
  const { users, seed, setSeed, locale, setLocale, errorChance, setErrorChance } =
    useContext(Context)
  const { generateRandomSeed } = useGenerator()

  const handleChangeSeed = (e: ChangeEvent<HTMLInputElement>) => {
    setSeed(e.target.value)
  }

  const handleButtonClick = () => {
    generateRandomSeed()
  }

  const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value)
  }

  const handleChangeErrorChance = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorChance(Number(e.target.value))
  }

  return (
    <>
      <Col>
        <Form.Group className='mb-3' controlId='seed'>
          <Form.Label>Seed</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter your seed number'
            value={seed}
            onChange={handleChangeSeed}
          />
          <Button variant='primary' className='mt-2' onClick={handleButtonClick}>
            Random seed
          </Button>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Error probability</Form.Label>
          <Form.Range
            className='my-2'
            min={'0'}
            max={'10'}
            step={'0.5'}
            value={errorChance}
            onChange={handleChangeErrorChance}
          />
          <Form.Control
            className='mt-2'
            type='number'
            placeholder='Enter error probability'
            value={errorChance}
            onChange={handleChangeErrorChance}
          />
        </Form.Group>
      </Col>
      <Col className='ju'>
        <Form.Label>Localizations</Form.Label>
        <Form.Select
          aria-label='Default select example'
          value={locale}
          onChange={handleChangeLocale}
        >
          <option value='de-DE'>German</option>
          <option value='es-ES'>Spanish</option>
          <option value='fr-FR'>French</option>
          <option value='it-IT'>Italian</option>
          <option value='pl-PL'>Polish</option>
        </Form.Select>
        <CSVLink data={users} filename={'fakeUsers.csv'}>
          <Button variant='warning' className='mt-2'>
            Export Users
          </Button>
        </CSVLink>
      </Col>
    </>
  )
}

export default ToolBar
