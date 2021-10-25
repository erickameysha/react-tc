import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {

    return (
        <div>
            <PageTitle title={'User'} />
            <PageTitle title={'component'} />

            <Rating value = {2}/>
            <Accordion titleValue={"Menu"} />
            <Accordion titleValue={"Users"}   />
            <Rating value = {3} />
            <Rating value = {0} />
            <Rating value = {1} />
            <Rating value = {2} />
            <Rating value = {4} />



        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}
function PageTitle( props: PageTitlePropsType) {

    return <h1>{props.title}</h1>
}


export default App;
