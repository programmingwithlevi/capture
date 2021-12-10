import { withTheme } from "styled-components";

export const pageAnimation ={ 
    hidden: {
        opacity: 0,
        y: 300,
        background: "#fff",
    },
    show: {
        opacity: 1,
        
        y: 0,
        transition: {
            duration: 1,
            background: "#fff",
        },
    },
    exit: {
        opacity: 1,
        y: 300,
        transition: {
            duration: 1, 
        },
    }
}