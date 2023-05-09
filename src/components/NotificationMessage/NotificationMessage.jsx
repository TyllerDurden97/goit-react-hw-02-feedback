import React from 'react'


export const Notification = ({message }) => {
   return (
      <>
         {message && <h2 >{message}</h2>}
      </>
   )
}