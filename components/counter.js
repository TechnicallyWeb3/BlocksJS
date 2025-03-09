import { Blocks } from "../blocks.js";

export const Counter = () => {
    const contextId = 'counter';
    const [count, setCount] = Blocks.useContext(contextId, 0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const styles = {
        counter: {
            "display": "flex",
            "align-items": "center",
            "gap": "10px",
            "margin": "20px 0"
        },
        count: {
            "font-size": "24px",
            "font-weight": "bold"
        }
    };

    return `
        <div style=${Blocks.addStyles(styles.counter)}>
            <span style=${Blocks.addStyles(styles.count)}>${count}</span>
            <button onclick=${Blocks.addFunction(handleIncrement)}>Increment</button>
        </div>
    `;
};

export default Counter; 