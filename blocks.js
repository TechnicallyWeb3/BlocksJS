// this is like react.js but we went with blocks.js to represent the building blocks of components

export class Blocks {
    // Converts a JavaScript function to a string that can be used as an inline event handler
    static addFunction(fn) {
        if (!fn) return '';
        
        // Create a unique function name using the original name plus a random suffix
        const uniqueSuffix = Math.random().toString(36).substr(2, 9);
        const functionName = `_blocks_${fn.name || 'anonymous'}_${uniqueSuffix}`;
        
        // Add the function to the window object so it can be called from inline handlers
        window[functionName] = fn;
        
        // Return the string that calls the function
        return `"${functionName}()"`;
    }

    // Converts a style object to an inline CSS string
    static addStyles(styles) {
        if (!styles) return '';

        // Convert the style object to a string of CSS properties
        const styleString = Object.entries(styles)
            .map(([key, value]) => {
                // Convert camelCase to kebab-case if needed
                const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                return `${cssKey}: ${value}`;
            })
            .join('; ');

        return `"${styleString}"`;
    }
}

export default Blocks;
