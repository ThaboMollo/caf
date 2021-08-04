import React from "react";
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
    return (
        <div className="cnt">
            <img classNam="img-responsive" src={props.pic} alt={props.heading} />
            <div className="cnt__text">
                <h1>{props.heading}</h1>
                <p>
                    {props.intro}
                </p>
                <Link to={{
                    pathname: "/blog",
                    state: {
                        pic: `${props.pic}`,
                        title: `${props.heading}`,
                        intro: `${props.intro}`,
                        body1: `${props.body1}`,
                        body2: `${props.body2}`,
                        body3: `${props.body3}`,
                        body4: `${props.body4}`
                    }
                }} className="btn">
                    Read More
                    <i className="fa fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default BlogItem;