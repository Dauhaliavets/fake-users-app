import React, { useContext, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import { TableColumnTitles } from '../../constants/tableColumnTitles'
import { Context } from '../../context/Context'
import { useGenerator } from '../../hooks/useGenerator'

function UsersTable() {
  const { users, seed, locale, errorChance } = useContext(Context)
  const { generateFirstUsers, generateNextUsers } = useGenerator()

  useEffect(() => {
    generateFirstUsers()
  }, [seed, locale, errorChance])

  const getMoreUsers = () => {
    generateNextUsers()
  }

  return (
    <Container
      id='scrollable'
      style={{
        height: 715,
        overflow: 'scroll',
      }}
    >
      <InfiniteScroll
        dataLength={users.length}
        next={getMoreUsers}
        hasMore={true}
        scrollThreshold={0.99}
        loader={<h6>Loading...</h6>}
        scrollableTarget='scrollable'
      >
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              {TableColumnTitles.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{user.seed}</td>
                <td>{user.fullName}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </InfiniteScroll>
    </Container>
  )
}

export default UsersTable
