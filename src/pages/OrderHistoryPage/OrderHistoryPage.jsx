import React from 'react'
import { checkToken } from '../../utilities/users-service'

function OrderHistoryPage() {

  const handleCheckToken = async () =>{
    const expDate = await checkToken()
    console.log(expDate)
  }
  return (
    <>
      <h1>Order History page</h1>
      <button onClick={handleCheckToken}>Check when my login expires</button>
    </>
  )
}

export default OrderHistoryPage
