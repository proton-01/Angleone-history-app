import React from 'react'

export default function ShowHistory() {
    let history = localStorage.getItem('history_data');
  return (
    <div>{history}</div>
  )
}
