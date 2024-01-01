import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import primaLogo from '@/assets/PRIMA_logo_white.jpg';
import roundClockPng from '@/assets/roundClock.png';
import SettingsSvg from '@/assets/settings.svg';


function logPlatform(value:string): void{
  console.log(value);
}

export const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(prev => prev + 1);
    if(__PLATFORM__ === 'desktop'){
      logPlatform(__PLATFORM__);
    }
    if(__PLATFORM__ === 'mobile'){
      logPlatform(__PLATFORM__);
    }
  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img src={roundClockPng} alt='' />
        <img src={primaLogo} alt='' />
      </div>
      <div>
        <SettingsSvg fill={'red'} width={20} style={{color: 'blue'}}/>
      </div>
        <Link to={'/about'}>about</Link>
        <br />
        <Link to={'/shop'}>shop</Link>
        <br />
        Hello Alex2: <span>{count}</span>
        <button className={classes.button} onClick={increment}>
            <span className={classes.value}>inc</span>
        </button>
        <Outlet />
    </div>
  )
}