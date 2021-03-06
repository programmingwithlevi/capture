import { withTheme } from "styled-components";

export const pageAnimation ={ 
    hidden: {
        opacity: 0,
        y: 300,
        
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            
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
export const titleAnim = {
    hidden: {y: 200},
    show: {
        y:0,
        transition: {duration: 0.75, ease: "easeOut"},
    }
}