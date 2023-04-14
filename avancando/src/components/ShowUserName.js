import React from 'react'

const ShowUserName = (/*props*/{ name, age }) => {
  return (
    <div>
        <h2>O nome do usuário é { /*props.name*/ name } e a idade é { age } anos de idade.</h2>
    </div>
  )
}

export default ShowUserName