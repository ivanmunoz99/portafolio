import React from 'react'
import '../home/Home.css'

function Home() {
    return (
        <div >
            <div className="container-fluid bg-primary">
                <div className="container text-center text-white">
                    <p className='fs-6 pt-5 mb-0'><small>Hola</small> </p>
                <p className='fs-1 fw-bolder'>Soy Ivan Muñoz</p>
                <p className=''>Soy ingeniero digital con enfoque al desarrollo web, contenido digital/multimedia y recursos informáticos.
                </p>
                <p className='mb-5'>Te presento mi portafolio en el cual podrás ver mis trabajos a lo largo de mi trayectoria.
                </p>
                <button className='btn btn-outline-warning'>descargar CV</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,101.3C480,117,600,171,720,165.3C840,160,960,96,1080,74.7C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>

    )
}

export default Home