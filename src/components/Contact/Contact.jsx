import React from 'react'

const Contact = () => {
  return (
    <div>
      <form action="#" method="post">
        <div>
          <p>Name</p>
          <input type="text" name="name" value="name" required />
        </div>
        <div>
          <p>Surname</p>
          <input type="text" name="surname" value="surname" required />
        </div>
        <div>
          <p>email</p>
          <input type="email" name="email" value="email" required />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default Contact