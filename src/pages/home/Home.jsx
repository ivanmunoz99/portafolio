import React from 'react'
import '../home/Home.css'

function Home() {
    return (
        <div >
            <div className="container-fluid bg-primary">
                <div className="container text-center">
                    <p>Hola</p>
                <p>Soy Ivan Muñoz</p>
                <p>Soy ingeniero digital con enfoque al desarrollo web, contenido digital/multimedia y recursos informáticos.
                </p>
                <p>Te presento mi portafolio en el cual podrás ver mis trabajos a lo largo de mi trayectoria.
                </p>
                <button>descargar CV</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fill-opacity="1" d="M0,128L80,160C160,192,320,256,480,250.7C640,245,800,171,960,160C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>

    )
}

export default Home