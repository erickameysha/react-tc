import React from "react";

function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>

    </div>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

function AccordionTitle() {
    return <h3>Меню</h3>

}

export default Accordion;