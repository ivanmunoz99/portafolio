import React from 'react'
import '../components/Footer.css'

function Footer() {
    return (
        <div className='container-fluid bg-light'>
            <div className="container ">
                <p className='m-0 pt-4 text-center'>CONTACTAME</p>
                <hr className='m-0' />
                <div className="contact">
                    <ul className='justify-content-center p-0 m-0 py-3'>
                        <a href="https://github.com/ivanmunoz99" target="blank">
                            <li>
                                <span className='icon'><i className='bi bi-github'></i></span>
                                <span className='titulo'>Github</span>
                            </li>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=573043506199&text=" target="blank">
                            <li>
                                <span className='icon'><i className='bi bi-whatsapp'></i></span>
                                <span className='titulo'>WhatsApp</span>
                            </li>
                        </a>
                        <a href="www.linkedin.com/in/ivan-muñoz-andrade" target="blank">
                            <li>
                                <span className='icon'><i className='bi bi-linkedin'></i></span>
                                <span className='titulo'>Linkedin</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer