import { useState } from 'react'

const ContactForm = () => {
    const [msg, setMsg] = useState(false)

    return (
        <div className='contact-form'>
            <form 
                action="https://formsubmit.co/abdo.afifi20007@gmail.com" 
                method="POST"
            >
                <h1>Send Message 📩</h1>
                
                <input
                    type="text"
                    name="name"
                    className='name'
                    required
                    placeholder='Enter Your Name' />

                <input
                    type="email"
                    name="email"
                    className='email'
                    required
                    placeholder='Enter Your Email'
                    autoComplete="email"
                />

                <textarea
                    name='message'
                    className='textarea'
                    required
                    rows={12}
                    placeholder='Enter Your Message Here'
                />
                
                <button type='submit' className='link-btn submit'>
                    Send
                </button>
                
                <h1 className='submit-msg'>{msg ? "Thank You For Connecting With Me 🤝" : ""}</h1>
            </form>
        </div>
    )
}

export default ContactForm