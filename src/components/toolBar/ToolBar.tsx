import React, { ChangeEvent, useContext } from 'react'
import { Col, Form } from 'react-bootstrap'
import { Context } from '../../context/Context'

function ToolBar() {
  const { seed, setSeed, locale, setLocale, errorChance, setErrorChance } = useContext(Context)

  const handleChangeSeed = (e: ChangeEvent<HTMLInputElement>) => {
    setSeed(e.target.value)
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
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Error probability</Form.Label>
          <Form.Range
            min={'0'}
            max={'10'}
            step={'0.5'}
            value={errorChance}
            onChange={handleChangeErrorChance}
          />
          <Form.Control
            type='number'
            placeholder='Enter error probability'
            value={errorChance}
            onChange={handleChangeErrorChance}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Label>Localizations</Form.Label>
        <Form.Select
          aria-label='Default select example'
          value={locale}
          onChange={handleChangeLocale}
        >
          <option value='de-DE'>German</option>
          <option value='es-ES'>Spanish</option>
          <option value='fr-FR'>French</option>
          <option value='ru-RU'>Russian</option>
          <option value='pl-PL'>Polish</option>
        </Form.Select>
      </Col>
    </>
  )
}

export default ToolBar
