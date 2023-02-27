import React from 'react'

function Footer() {
    return (
        <div className='container-fluid bg-light'>
            <div className="container">
                <p className='m-0 pt-4 text-center'>CONTACTAME</p>
                <hr className='m-0'/>
                <ul>
                    <li style={{i:'#a955ff', j:'#ea51ff'}}>
                        <span className='icon'><i className='bi bi-github'></i></span>
                        <span className='titulo'>Github</span>
                    </li>
                    <li style={{i:'#a955ff', j:'#ea51ff'}}>
                        <span className='icon'><i className='bi bi-whatsapp'></i></span>
                        <span className='titulo'>WhatsApp</span>
                    </li>
                    <li style={{i:'#a955ff', j:'#ea51ff'}}>
                        <span className='icon'><i className='bi bi-linkedin'></i></span>
                        <span className='titulo'>Linkedin</span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer