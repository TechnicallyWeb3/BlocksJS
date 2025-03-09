import { Blocks } from "../blocks.js";

export const Card = ({ title, description }) => {
        
    const styles = {
        card: {
            "padding": "20px",
            "background-color": "fff",
            "border-radius": "8px",
            "box-shadow": "0 2px 4px rgba(0,0,0,0.1)",
            "margin": "10px",
            "max-width": "300px"
        }
    }

    return `
        <div styles=${Blocks.addStyles(styles.card)}>
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `
};

export default Card;