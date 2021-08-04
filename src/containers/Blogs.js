import React from "react";

// import BlogItem from "../components/Blog_item";

function Blogs(props) {
    return (
        <div id="blog" className="text-center">
            <div className="container">
                <div className="no-content">
                    <h2>There is currently no blog articles available.</h2>
                </div>
                {/* <div className="cnt__row">
                            {
                                props.data
                                ? props.data.map(
                                    (d, i) => (
                                        <BlogItem 
                                            key={i}
                                            pic={d.image}
                                            heading={d.title}
                                            intro={d.intro}
                                            body1={d.blog1}
                                            body2={d.blog2}
                                            body3={d.blog3}
                                            body4={d.blog4}
                                            link={`blogs/${d.link}`}
                                            />
                                ))
                                : 'loading...'
                            }
                        </div> */}
            </div>
        </div>
    )
}

export default Blogs;