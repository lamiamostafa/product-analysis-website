import React from 'react';
import './Blogs.css';


const Blogs = () => {
    return (
        <div className="container mt-5">
            <h1>What is Context Api? What is the purpose of context Api?</h1>
            <p className="blogs">
                Context API is the way to create global variables that
                can be passed around the component tree.
                Context API is an alternative to passing props
                manually in a component tree. Something that is also called
                Prop drilling. Context API is provided a way to pass data
                through the component tree from parent to child components,
                without having to pass props down manually at each level.
                The main purpose of using context API is avoiding 'prop drilling' – passing prop at every level. It is  be more liked a pipeline used to pass values from one end to another. Context API provides the easiest way for passing data through the component tree so that we don't have to pass props down manually at every level.
            </p>
            <h1>What is Semantic Tag?</h1>
            <p className="blogs">The core characteristic of a semantic tag is that it  clearly communicated its meaning to both the developer and the browser. These elements are clearly defined its content.
                Semantics is concerned with meaning. In HTML, this is the purpose of elements and attributes, and the logical (sense and reference) relationship between elements and the attributes of those elements
                Specifically, semantic tags are making it clear to the browser what the meaning of a page and its content is.

                The are several advantages of using semantics tags in HTML:
                The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements are much easier to read.It has greater accessibility. It offers a better user experience.</p>

        </div>
    );
};

export default Blogs;