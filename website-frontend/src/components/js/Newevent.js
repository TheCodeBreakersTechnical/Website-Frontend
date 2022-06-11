import React from 'react'
import '../css/Newevent.css';

import Aos from "aos";
import "aos/dist/aos.css";
import photo1 from "../images/a1.png";
import photo2 from "../images/program1.jpg";
import photo3 from "../images/iot2.jpg";

export default function Newevent() {
    return (
        <>

        {/* Header */}

        <div className="new">
            <h2 className="new-text">EVENTS</h2>
        </div>

        {/* Carousel */}

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1500">
                        <img src={photo1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src={photo2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1500">
                        <img src={photo3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        {/* Upcoming Events*/}

            <section id="team" className="teamab section-bg">
                <div className="container" >

                    <div className="section-title">
                        <h2>Upcoming Events</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start" >
                                <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">First Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">Second Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" >
                                <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">Third Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" >
                                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">Fourth Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        {/* Past Events */}

        <section id="team" className="teamab section-bga">
                <div className="container" >

                    <div className="section-title">
                        <h2>Past Events</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start" >
                                <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">First Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start" >
                                <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">Second Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" >
                                <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">Third Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start" >
                                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4><a href="">Fourth Event</a></h4>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}