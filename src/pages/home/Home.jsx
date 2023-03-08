import React from 'react'
import '../home/Home.css'
import Rolo from '../../assets/img/dis_rolo.png' 
import SabujCha from '../../assets/img/sabujCha.png'
import zShop from '../../assets/img/zShop.png'
import ToDoList from '../../assets/img/to_do_list.png'
import videoClub from '../../assets/img/videoClub.png'
import cv from '../../assets/img/CV.pdf'
import corpo from '../../assets/img/corpo.png'


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
                    <a className='btn btn-outline-warning' href={cv} download={'CV'}>descargar cv</a>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#0d6efd" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,101.3C480,117,600,171,720,165.3C840,160,960,96,1080,74.7C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

            <div className="container">
                <h1 className='text-center'>Trabajos</h1>
                <div class="row my-5">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                        <div class="card mb-5">
                            <div class="card-body">
                                <img src={corpo} class="card-img-top" alt="corpohypatia" />
                                <h5 class="card-title py-3">CorpoHypatia</h5>
                                <a href="https://github.com/programateacademy/5-Corpohypatiapatia-Corpohypatia-Back-end" target="blank" class="btn btn-primary me-4">Repositorio</a>
                                <a href="https://5-corpohypatiapatia-corpohypatia-front-end.vercel.app/" target="blank" class="btn btn-primary">Despliegue</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                        <div class="card mb-5">
                            <div class="card-body">
                                <img src={videoClub} class="card-img-top" alt="videoClub" />
                                <h5 class="card-title py-3">VideoClub</h5>
                                <a href="https://github.com/AngelaDiaz20/videoclub-movies-front" target="blank" class="btn btn-primary me-4">Repositorio</a>
                                <a href="https://videoclub-movies.vercel.app/add" target="blank" class="btn btn-primary">Despliegue</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                        <div class="card mb-5">
                            <div class="card-body">
                                <img src={Rolo} class="card-img-top" alt="distribuidora el rolo" />
                                <h5 class="card-title py-3">Distribuidora el rolo</h5>
                                <a href="https://github.com/ivanmunoz99/distribuidora-el-rolo.git" target="blank" class="btn btn-primary me-4">Repositorio</a>
                                <a href="https://distribuidora-el-rolo.vercel.app/" target="blank" class="btn btn-primary">Despliegue</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                        <div class="card mb-5">
                            <div class="card-body">
                                <img src={ToDoList} class="card-img-top" alt="To do list" />
                                <h5 class="card-title py-3">To do list</h5>
                                <a href="https://github.com/AngelaDiaz20/To-Do-List-App/tree/ivan" target="blank" class="btn btn-primary me-4">Repositorio</a>
                                <a href="https://flores-del-tambo-to-do-list-app.vercel.app/" target="blank" class="btn btn-primary">Despliegue</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                        <div class="card mb-5">
                            <div class="card-body">
                                <img src={SabujCha} class="card-img-top" alt="sabujCha" />
                                <h5 class="card-title py-3">SabujCha</h5>
                                <a href="https://github.com/ivanmunoz99/sabuj.git" target="blank" class="btn btn-primary me-4">Repositorio</a>
                                <a href="https://sabuj.vercel.app/" target="blank" class="btn btn-primary">Despliegue</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                        <div class="card mb-5">
                            <div class="card-body">
                                <img src={zShop} class="card-img-top" alt="zShop" />
                                <h5 class="card-title py-3">zShop</h5>
                                <a href="https://github.com/ivanmunoz99/zShop.git" target="blank" class="btn btn-primary me-4">Repositorio</a>
                                <a href="https://zshop-git-ivn-ivanmunoz99.vercel.app/single.html" target="blank" class="btn btn-primary">Despliegue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home