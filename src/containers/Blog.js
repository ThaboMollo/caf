import React, { Component } from "react";

class Blog extends Component {
    render() {
        const { state } = this.props.location;
        return (
            <div id="blog" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>{state.title}</h2>
                    </div>
                    <div className="row">
                        <div className="blog-img">
                            <img
                                className="img-responsive"
                                lazy
                                src={state.pic}
                                alt="Blog Pic"
                            />
                        </div>
                        <div className="blog-text">
                            <p>{state.intro}</p>
                        </div>
                        <div className="blog-text">
                            <p>{state.body1}</p>
                        </div>
                        <div className="blog-text">
                            <p>{state.body2}</p>
                        </div>
                        <div className="blog-text">
                            <p>{state.body3}</p>
                        </div>
                        <div className="blog-text">
                            <p>{state.body4}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
