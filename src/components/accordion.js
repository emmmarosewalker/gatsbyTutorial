import React from "react";

import ReactDOM from 'react-dom';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        const accordionEles = node.querySelector("ul");

        for (var i = 0; i < node.querySelectorAll("p").length; i++) {
            let para = node.querySelectorAll("p")[i];
            para.nextElementSibling.classList.add("accordionInner");
            para.nextElementSibling.classList.add("displayNone");
        }

        const accordionHeadings = accordionEles.querySelectorAll("p");

        for (var i = 0; i < accordionHeadings.length; i++) {
            accordionHeadings[i].addEventListener("click", function(e) {
                let accElements = node.querySelectorAll(".accordionInner");
                for (var j = 0; j < accElements.length; j++) {
                    accElements[j].classList.add("displayNone");
                }
                e.target.nextElementSibling.classList.remove("displayNone");
            })
        }

    }

    render() {
      return (<div className={this.props.clsName} dangerouslySetInnerHTML={{ __html: this.props.hTML.html }}></div>);
    }
}

export default Accordion;