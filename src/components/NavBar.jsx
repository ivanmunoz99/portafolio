import React from 'react'
import Logo from '../assets/img/logo-negativo-web.png'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-primary ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">PORTAFOLIO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarNavDropdown">
                <img src={Logo} class="rounded mx-auto d-block" alt="Logo" width={100}/>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Trabajos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/">CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar