import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {UseScroll} from 'UseScroll';

const FaqSection = () => {
    const [element,controls] = UseScroll();
    return(
        <Faq>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
          
                <div className="answer">
                   <p>asdfefdvasdav esdvs asdf as df</p> 
                    <p>a asdf evvt tgagr fadee ddfaef</p>
                </div>               
            
            </Toggle>
            <Toggle title="Daily Schedule">
                          
                <div className="answer">
                   <p>asdfefdvasdav esdvs asdf as df</p> 
                    <p>a asdf evvt tgagr fadee ddfaef</p>
                </div>               
            
            </Toggle>
            <Toggle title="Different Payment Methods">
                        
                <div className="answer">
                   <p>asdfefdvasdav esdvs asdf as df</p> 
                    <p>a asdf evvt tgagr fadee ddfaef</p>
                </div>              
            
            </Toggle>
            <Toggle title="What Products Do You Offer?">
                         
                <div className="answer">
                   <p>asdfefdvasdav esdvs asdf as df</p> 
                    <p>a asdf evvt tgagr fadee ddfaef</p>
                </div>  
            
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0 rem;
        }
    }
`;

export default FaqSection;