import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { TableColumnTitles } from '../../constants/tableColumnTitles'
import { Context } from '../../context/Context'

function UsersTable() {
  const { users } = useContext(Context)

  return (
    <Table responsive striped bordered hover size='sm'>
      <thead>
        <tr>
          {TableColumnTitles.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.seed}>
            <td>{index + 1}</td>
            <td>{user.seed}</td>
            <td>{user.fullName}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default UsersTable
