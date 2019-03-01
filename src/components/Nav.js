import React from 'react';
import NavItem from './NavItem';
import SubNavItem from './SubNavItem';
import SubNavIcon from './SubNavIcon';

const Nav = () => {

    return (
        <nav className='mainNav'>

            <div>
                <NavItem icon='scheduling.png'>
                    my schedule & bidding
                    <SubNavIcon></SubNavIcon>
                </NavItem>
                <nav className="subNav">
                    <div className="subNav__title">
                        <h2>Scheduling & Bidding</h2>
                        <button className='subNav-closeIcon' onClick={(e) => {
                            const subNav = e.target.parentNode.parentNode
                            subNav.classList.toggle('open');
                        }}></button>
                    </div>
                    <div className="subSubNav-container">
                        <NavItem className="subNavItem">
                            Reporting
                            <button className='subNavIcon subsubNavIcon' onClick={(e) => {
                                const subSubNav = (e.target.tagName === 'BUTTON') ? e.target.parentNode.nextElementSibling.parentNode : e.target.parentNode.parentNode.nextElementSibling.parentNode;
                                console.log(subSubNav);
                                subSubNav.classList.toggle('open');
                            }}>
                                <div className='subNavIcon-caret'></div>
                            </button>
                        </NavItem>
                        <nav className="subSubNav">
                            <NavItem className="subSubNavItem">1111111</NavItem>
                            <NavItem className="subSubNavItem">2222222</NavItem>
                            <NavItem className="subSubNavItem">3333333</NavItem>
                        </nav>
                    </div>
                    <NavItem className="subNavItem">
                        Agriculture and Customs
                        <SubNavIcon></SubNavIcon>
                    </NavItem>
                    <NavItem className="subNavItem">Known Crewmember</NavItem>
                    <NavItem className="subNavItem">Product Safety Data Search</NavItem>
                </nav>
            </div>

            <div>
                <NavItem icon='safety.png'>
                    safety
                    <SubNavIcon></SubNavIcon>
                </NavItem>
                <nav className="subNav">
                    <div className="subNav__title">
                        <h2>Safety</h2>
                        <button className='subNav-closeIcon' onClick={(e) => {
                            const subNav = e.target.parentNode.parentNode
                            subNav.classList.toggle('open');
                        }}></button>
                    </div>                
                    <NavItem className="subNavItem">Reporting</NavItem>
                    <NavItem className="subNavItem">Agriculture and Customs</NavItem>
                    <NavItem className="subNavItem">Known Crewmember</NavItem>
                    <NavItem className="subNavItem">Product Safety Data Search</NavItem>
                </nav>
            </div>

            <NavItem icon='training.png'>training</NavItem>

            <div>
                <NavItem icon='admin.png'>
                    administration
                    <SubNavIcon></SubNavIcon>
                </NavItem>
                <nav className="subNav">
                    <div className="subNav__title">
                        <h2>administration</h2>
                        <button className='subNav-closeIcon' onClick={(e) => {
                            const subNav = e.target.parentNode.parentNode
                            subNav.classList.toggle('open');
                        }}></button>
                    </div>                
                    <NavItem className="subNavItem">Reporting</NavItem>
                    <NavItem className="subNavItem">Agriculture and Customs</NavItem>
                    <NavItem className="subNavItem">Known Crewmember</NavItem>
                    <NavItem className="subNavItem">Product Safety Data Search</NavItem>
                </nav>
            </div>

            <div>
                <NavItem icon='catering.png'>
                    catering & brand
                    <SubNavIcon></SubNavIcon>
                </NavItem>
                <nav className="subNav">
                    <div className="subNav__title">
                        <h2>catering & brand</h2>
                        <button className='subNav-closeIcon' onClick={(e) => {
                            const subNav = e.target.parentNode.parentNode
                            subNav.classList.toggle('open');
                        }}></button>
                    </div>                
                    <NavItem className="subNavItem">Reporting</NavItem>
                    <NavItem className="subNavItem">Agriculture and Customs</NavItem>
                    <NavItem className="subNavItem">Known Crewmember</NavItem>
                    <NavItem className="subNavItem">Product Safety Data Search</NavItem>
                </nav>
            </div>

            <NavItem icon='hotels.png'>hotels</NavItem>
            <NavItem icon='base.png'>my base</NavItem>
            <NavItem icon='recognition.png'>recognition</NavItem>
            <NavItem icon='team.png'>my leadership team</NavItem>
        </nav>
    );
};

export default Nav;