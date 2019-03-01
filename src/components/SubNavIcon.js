import React from 'react';

const SubNavIcon = () => (
    <button className='subNavIcon' onClick={(e) => {        
        const subNav = (e.target.tagName === 'BUTTON') ? e.target.parentNode.nextElementSibling : e.target.parentNode.parentNode.nextElementSibling;
        subNav.classList.toggle('open');
    }}>
        <div className='subNavIcon-caret'></div>
    </button>
);

export default SubNavIcon