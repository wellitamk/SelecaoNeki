import { Button } from 'bootstrap';
import React from 'react';
import './Button.css'


const UIButton = ({children}) => {
return (

    <Button clasName="ui-button">{children}</Button>
)
}

export default UIButton;