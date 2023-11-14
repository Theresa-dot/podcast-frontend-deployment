import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div class="container mt-3">
      <div class="px-4 pt-5 my-5 text-center">
        <h1 class="display-4 fw-bold text-body-emphasis">
          Your Daily Dive into Podcast Excellence
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 desc-1 fs-5">
            <span style={{ color: "#AD8B73" }}>Audioverse </span>is your gateway
            to a world of captivating audio content. Stream, discover, and share
            podcasts on our user-friendly platform.
          </p>
        </div>
        <div class="overflow-hidden" style={{ maxheight: "50vh" }}>
          <div class="container px-5">
            <img
              src="/images/main-2.jpg"
              class="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Network error"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="/images/main-1.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Network Error"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>

        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Where every <span style={{ color: "#A77979" }}>idea </span>finds its{" "}
            <span style={{ color: "#A77979" }}>voice</span>.
          </h1>
          <p className="lead desc-2" style={{ color: "black" }}>
            Join the thriving community of podcast enthusiasts on Audioverse,
            where streaming excellence meets a world of audio wonders. Thousands
            of listeners choose Audioverse for an immersive podcast
            experience—your destination for limitless stories, knowledge, and
            entertainment.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn navlink login btn-lg px-4 me-md-2"
            >
              <Link to="/create-registrant" className="navlink">
                Get Started for Free
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="/images/main-3.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Network Error"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Tune in, turn up, <span style={{ color: "#A77979" }}>podcast </span>
            bliss awaits.
          </h1>
          <p className="lead desc-2" style={{ color: "black" }}>
            Discover the art of listening at Audioverse. Elevate your daily
            routine with a diverse range of podcasts—your go-to destination for
            captivating audio content.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn navlink login btn-lg px-4 me-md-2"
            >
              <Link to="/login-registrant" className="navlink">
                Discover More
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-8">
        <h1 class="fw-bold">
          Featured <span style={{ color: "#967E76" }}>Podcasts</span>
        </h1>
      </div>

      <div className="album bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="/images/featured-2.jpg"
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={375}
                  aria-label="Placeholder: Thumbnail"
                  preserveaspectratio="xMidYMid slice"
                  focusable="false"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <div className="card-body">
                  <p className="card-text desc-2 fw-bold">
                    Episode 02: Brewed Bliss
                  </p>
                  <div className="text mb-3" style={{ fontStyle: "italic" }}>
                    <span className="text-black-opacity-05">
                      <small>
                        By Danielle Perry <br /> November 9, 2023
                      </small>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm navlink login"
                      >
                        <Link to="/login-registrant" className="navlink">
                          View
                        </Link>
                      </button>
                    </div>
                    <small className="text-body-secondary">28 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="/images/featured-1.jpg"
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={375}
                  aria-label="Placeholder: Thumbnail"
                  preserveaspectratio="xMidYMid slice"
                  focusable="false"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <div className="card-body">
                  <p className="card-text desc-2 fw-bold">
                    Episode 04: Paws and Listen
                  </p>
                  <div className="text mb-3" style={{ fontStyle: "italic" }}>
                    <span className="text-black-opacity-05">
                      <small>
                        By Ella Watkins <br />
                        November 5, 2023
                      </small>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm navlink login"
                      >
                        <Link to="/login-registrant" className="navlink">
                          View
                        </Link>
                      </button>
                    </div>
                    <small className="text-body-secondary">32 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="/images/featured-3.jpg"
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height={375}
                  aria-label="Placeholder: Thumbnail"
                  preserveaspectratio="xMidYMid slice"
                  focusable="false"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <div className="card-body">
                  <p className="card-text desc-2 fw-bold">
                    Episode 03: Chapter Chat
                  </p>
                  <div className="text mb-3" style={{ fontStyle: "italic" }}>
                    <span className="text-black-opacity-05">
                      <small>
                        By Luke Hayes <br /> October 29, 2023
                      </small>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm navlink login"
                      >
                        <Link to="/login-registrant" className="navlink">
                          View
                        </Link>
                      </button>
                    </div>
                    <small className="text-body-secondary">45 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="mt-1 pb-2 fw-bold">
          Why should you choose{" "}
          <span style={{ color: "#967E76" }}>Audioverse</span>?
        </h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height={30}
                fill="currentColor"
                className="bi bi-collection-play"
                viewBox="0 0 16 16"
              >
                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
              </svg>
            </div>
            <div>
              <h3 className="fs-4 fw-bold desc-3">Diverse Podcast Library</h3>
              <p className="desc-2">
                A vast collection of podcasts spanning various genres, ensuring
                there's something for every listener.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height={30}
                fill="currentColor"
                className="bi bi-file-earmark-music"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
            </div>
            <div>
              <h3 className="fs-4 fw-bold desc-3">Personalized Playlists</h3>
              <p className="desc-2">
                Users can create and curate personalized playlists to organize
                their favorite episodes.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height={30}
                fill="currentColor"
                className="bi bi-wifi-off"
                viewBox="0 0 16 16"
              >
                <path d="M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z" />
              </svg>
            </div>
            <div>
              <h3 className="fs-4 fw-bold desc-3">Offline Listening</h3>
              <p className="desc-2">
                The ability to download episodes for offline listening, catering
                to users on the go.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;
