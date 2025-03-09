import { Blocks } from "../blocks.js"

export const Button = ({ label, onClick }) => {

    const styles = {
        button: {
            "padding": "10px 20px",
            "font-size": "16px",
            "background-color": "007bff",
            "color": "white",
            "border-radius": "5px"
        }
    };
    
    return `
        <button onclick=${Blocks.addFunction(onClick)} style=${Blocks.addStyles(styles.button)}>
            ${label}
        </button>
    `;
};

export default Button;