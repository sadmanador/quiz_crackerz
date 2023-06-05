import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h3>Purpose of Router</h3></Accordion.Header>
        <Accordion.Body>
          React router make some url paths. However, these paths can be visited without reloading the page(which is the main concept of SPA). Secondly, router helps to create dynamic path on demand so that API and other server side data can viewed with no problem (without making too many pages for each and every path file). 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h3>How does Context API works</h3></Accordion.Header>
        <Accordion.Body>
          Context API sets the data(like api retrieved data, variable, array, object, function) in accessible way to like a data center. then data can be passed to components without passing through each layer of components. this way is quite time efficient and DRY method friendly. However, exporting of the context data and importing of context hook is mandatory.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h3>useRef()</h3></Accordion.Header>
        <Accordion.Body>
          Unlike JS, react way of writing code generally doesn't allow DOM to be selected with id attribute. useRef hook help to create reference quite like id in html, so that element of JSX can be selected by function and passed via props or context. reference selector can be use to select JSX element to modify their class, id, style and many more.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blogs;