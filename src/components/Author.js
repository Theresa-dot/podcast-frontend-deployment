import { Link } from "react-router-dom";

function Author({ author, categories, imageAlt}) {

  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="card flex-row">
          <img
            src={imageAlt}
            className="bd-placeholder-img card-img-top"
            width="100"
            height="200"
            alt={imageAlt}
          />
          <div className="card-body">
            <p className="card-text desc-2 fw-bold">{author}</p>
            <div className="text mb-3" style={{ fontStyle: "italic" }}>
              <span className="text-black-opacity-05">
                <small>{categories.join(", ")}<br /></small>
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm navlink login">
                  <Link to="#" className="navlink">
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
