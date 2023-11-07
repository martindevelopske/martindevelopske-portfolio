import { useEffect, useState } from 'react'
import Hero from './sections/Hero.tsx'

type Theme ='dark' | 'light'
export default function App () {
 const [theme, setTheme]= useState<Theme | null>(null);
 useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
    } else{
        setTheme('light')
    }
 },[])
 useEffect(()=>{
    if(theme ==='dark'){
        document.documentElement.classList.add('dark')
    } else{
        document.documentElement.classList.remove('dark')
    }
 }, [theme]);

 const handleThemeSwitch=()=>{
    setTheme(theme==="dark"?"light":"dark")
 }
    return (
        <div className='text-black flex flex-col items-center justify-center w-full h-auto'  >
            <button onClick={handleThemeSwitch}>switch {theme}</button>
            <Hero />
        
        

        </div>
    )
}

