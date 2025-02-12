import { useState } from 'react';
import globe from '../assets/globe.png'

function Header() {
    const [hover, setHover] = useState(false);

    let defaultStyle = {
        backgroundColor: '#F55A5A',
        width: '80vw',
        margin: '1em auto',
        transition: "all 0.25s ease-out",
    };

    function toggleHover() {
        setHover(!hover);
    }

    if (hover) defaultStyle = {
                                ...defaultStyle, 
                                backgroundColor: "navy",
                                transition: "all 0.25s ease-in", 
                            };

    return (
        <header 
            style={defaultStyle}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
            <p>
                <img src={globe} alt="Globe icon" />
                my travel journal.
            </p>
        </header>
    );
}

export default Header;