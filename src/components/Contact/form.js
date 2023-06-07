import React from 'react'

const Form = () => {
  return (
    <div className='form--container'>
        <form >
        <h1 style={{ textAlign: 'center' }}>Contact us!</h1>

        <div className='form--divs'>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>

        <div className='form--divs'>
          <label for="email">Email:</label>
          <input type="email" id="email" name="_replyto" required/>
        </div>

        <div className='form--divs'>
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required/>
        </div>

        <div className='form--divs'>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" className='send--button'>Send Email</button>

      </form>
    </div>
  )
}

export default Form