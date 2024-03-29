import React from 'react';
import './homeComponents/home.css';
import NavBar from './homeComponents/navBar';
import BodyText from './homeComponents/bodyText';
import SignInButton from './homeComponents/signInButton';

const Home = (props) => {
    return(
        <div className={'home'}>
            <NavBar className={'home-navBar'}/>
            <BodyText className={'home-bodyText'}/>
            <div className={'home-signInButtonLarge'}>
                <a href={'https://quizapp-server.herokuapp.com/auth/google'} className={'a'}>
                    <SignInButton/>
                </a>
            </div>
            {/*<div className={'coordinators'}>*/}
            {/*    <span className={'coordinators-head'}>Coordinators </span>*/}
            {/*    <span className={'coordinators-instant'}>{`Mahesh 9995080629`}</span>*/}
            {/*    <span className={'coordinators-instant'}>{`Ashiq  9746184504`}</span>*/}
            {/*</div>*/}
            <div className={'home-logos'}>
                <div className={'mhmLogoContainer'}>
                    <img src={`https://quizapp-server.herokuapp.com/mhmlogoWhite.png`} className={'mhmImage'}/>
                </div>
                <div className={'ieeeLogoContainer'}>
                    <img src={`https://quizapp-server.herokuapp.com/IEEEWhiteLOGO.png`} className={'ieeeImage'} />
                </div>
                <div className={'cevLogoContainer'}>
                    <img src={`https://quizapp-server.herokuapp.com/CEVWhiteLogo.png`} alt="" className={'cevImage'}/>
                </div>
            </div>
            <div className={'developer'}>
                <div className={'developer-underline'}></div>
                <span className={'developer-name'}><span className={'developerDollarSign'}>{'${ '}</span>Iam-VM<span className={'developerDollarSign'}>{' }'}</span></span>
            </div>
        </div>
    );
};

export default Home;
