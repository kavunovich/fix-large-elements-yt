// Fix YouTube large banner
// By https://github.com/kavunovich
// Dated 14/08/2024

new Promise((resolve, reject) => {
    let i = setInterval(() => {
        let j = document.querySelector("ytd-rich-item-renderer"); // Detect banner main parent
        if (j) {
            let s = `
                <style>
                    ytd-rich-item-renderer {
                        --ytd-rich-grid-items-per-row: 6; <!-- variable responsible for the number of elements -->
                    }
                    
                    #contents.ytd-rich-shelf-renderer {
                        --ytd-rich-grid-slim-items-per-row: 9; <!-- variable responsible for the number of Shorts elements -->
                        justify-content: center;
                    }
                </style>
            `;
            
            document.head.insertAdjacentHTML("beforeend", s);     // Set styles for fix
            clearInterval(i);                                     // Clear interval
            resolve(0);                                           // Termination Promise
        }
    }, 1000); 
});
