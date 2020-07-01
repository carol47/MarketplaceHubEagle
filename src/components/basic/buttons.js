import React from 'react';
import { css } from '@emotion/core';

const PrimaryButton = props => {

    return (

        <button {...props} css={css `
            background-color: #FFC79A;
            border-radius: 5px;
            border: 1px solid black;
            
            max-width:fit-content;
            padding: 7px;          
            font-weight: bold;
            
            * {
              color: black;
              text-decoration: none;
            }
          `}>
            
          </button>

    )

}

export { PrimaryButton };