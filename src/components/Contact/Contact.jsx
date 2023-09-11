import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-form'>
      <div className='contact-form-content'>
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
    </div>
  )
}

export default Contact