import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <Navbar expand="lg" bg="success" variant="dark" className='px-4 mt-1' style={{borderRadius:'10px'}}> 
            <Navbar.Brand href="#home"><h5>User Control</h5></Navbar.Brand>
        </Navbar>
    );
}

export default NavigationBar;
