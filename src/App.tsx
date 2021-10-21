import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    debugger
    return (
        <div className="App">
            <div>
                <div>star</div>
                <div>star</div>
                <div>star</div>
                <div>star</div>
                <div>star</div>
                <div>star</div>
            </div>
            lel
            {/*<Reting />*/}
            <Accordion />
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>

        </div>

    );
}

function Star(){
    return(
        <div>star</div>
    )
}
function Reting() {
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>

    )
}

function Accordion() {
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default App;
