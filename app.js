// this is the main app.js file. It is used to load the pages and components, manage global state, and site metadata.
import { Button } from "./components/button.js";
import { Card } from "./components/card.js";
import { Counter } from "./components/counter.js";

export const App = () => {

    const label = "Click Me!!!"
    const title = "Hello BlocksJS!";
    const description = "BlocksJS is a react-like framework with no-build principles so that the BlocksJS project is already in a ready-built state. This is a lightweight framework without VirtualDOM or differential updates.";

    const handleClick = () => {
        const message = "Button Clicked!";
        alert(message);
        console.log(message);
    };

    return `
        <div>
            <h1>Hello BlockJS</h1>
            ${Counter()}
            ${Button({label:label, onClick:handleClick})} <!--, children=null)} to add optional child components-->
            ${Card({title:title, description:description})}
        <div>
    `;
}

export default App;