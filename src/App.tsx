import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {

    return (
        <div className="App">
            <AppTitle title={'This App component'}/>
            <AppTitle title={'brbrbr'}/>
            <Rating value={3}/>

            <Accordion title={'Me'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <Rating value = {1} />
            <Rating value = {2} />
            <Rating value = {3} />
            <Rating value = {4} />
            <Rating value = {0} />
        </div>
    )
}
type AppTitlePropsType = {
    title: string;
}
function AppTitle( props: AppTitlePropsType) {

    return <h1>{props.title}</h1>
}


export default App;
