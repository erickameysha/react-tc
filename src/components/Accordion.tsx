import React  from "react";

type AccordionPropsType ={
    title: string,
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>

        </div>
    }
}

function AccordionTitle(props: any) {

    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
export default Accordion;