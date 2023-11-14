// import { Carousel } from "bootstrap";
import Carousel from "./carousel";
import React from "react";

function About(){
    return(
        <div className="px-4 pt-5 my-4 text-center">
            <h1 className="display-4 fw-bold text-body-emphasis">
                About <span style={{ color: "#A77979" }}>Audioverse</span>
            </h1>
            <div className="col-lg-10 mx-auto">
                <p className="lead desc-1 fs-5 my-5">
                Welcome to Audioverse, where the magic of audio storytelling comes to
                life. Immerse yourself in a world of diverse podcasts, ranging from
                thought-provoking discussions to immersive narratives. Our platform offers
                more than just streaming; it's an interactive space where you can curate
                personalized playlists, connect with like-minded listeners, and explore a
                universe of engaging content.
                </p>
            </div>
            <Carousel/>
        </div>
      
    );
}

export default About;