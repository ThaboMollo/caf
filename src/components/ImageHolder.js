import React from 'react';

const ImageHolder = (props) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="portfolio-item">
                <div className="hover-bg">
                    {" "}
                        <a
                            title={props.name}
                            data-lightbox-gallery="gallery1"
                            href={props.link}
                            >
                                <div className="hover-text">
                                    <h4>{props.name}</h4>
                                    <h5>{props.date}</h5>
                                </div>
                                <div className="img-container">
                                    <img 
                                        src={props.pic}
                                        className="img-responsive"
                                        alt={props.name}
                                    />{" "}

                                </div>
                            </a>{" "}
                </div>
            </div>
        </div>
    )
}

export default ImageHolder;