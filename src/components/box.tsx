
import '../css/style.css';
import 'animate.css';
import {useState} from 'react';
   
    // @ts-ignore

import { ReactComponent as YourSvg } from '../img/Bin.svg';
    // @ts-ignore

import { ReactComponent as Add } from '../img/Adds.svg';
    // @ts-ignore

import { ReactComponent as Off } from '../img/Checkbox_Off.svg';
    // @ts-ignore

import { ReactComponent as On } from '../img/Checkbox_On.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';






function Box(){
  


  
  const initialText = 'Inserisci voce';
  const [buttonText, setButtonText] = useState(initialText);

  function handleClick() {
    setButtonText('Seconda Voce');
    
  }


  function handleAdd(){
    // @ts-ignore
   document.getElementById('n').style.display = "block";
   setButtonText('Inserisci voce')
  }
  
  function handleDelete(){
    // @ts-ignore
    document.getElementById('ab').style.display = "none";
    // @ts-ignore
    document.getElementById('s').style.display = "block";

  }
  function handleBin(){
    // @ts-ignore
    document.getElementById('n').style.display = "none";
    const oggetto1 = document.getElementById('s');
    // @ts-ignore
    oggetto1.classList.remove('animate__animated', 'animate__fadeInDown');
    const oggetto2 = document.getElementById('c');
    // @ts-ignore
    oggetto1.classList.add('animate__animated', 'animate__fadeInDown');
    // @ts-ignore
    oggetto2.classList.add('animate__animated', 'animate__fadeInDown');



    
    
  }






 
 



  
    return(
      //@ts-ignore
      <div className="container my-container">
     {/* @ts-ignore */}
      
        <div className="box">
          {/* @ts-ignore */}
          <div className='l-box'>
            {/* @ts-ignore */}
              <h1 className="title">Titolo</h1>
              {/* @ts-ignore */}
              <div id="ab">
                {/* @ts-ignore */}
                <YourSvg  style={{width:'30px'}}></YourSvg>
                {/* @ts-ignore */}
                <Off onClick={handleDelete} style={{width:'30px'}} className="mx-4 my-1" > </Off>
                {/* @ts-ignore */}
                <span  style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>

              {/* @ts-ignore */}
              <div className='none animate__animated animate__fadeInUp' id="n"> 
              {/* @ts-ignore */}
               <YourSvg onClick={handleBin} style={{width:'30px'}}></YourSvg>
               {/* @ts-ignore */}
               <Off style={{width:'30px'}} className="mx-4 mb-1"></Off>
               {/* @ts-ignore */}
               <span style={{color:'white'}}>Seconda voce</span>
              </div>

              {/* @ts-ignore */}
              <div className='none animate__animated animate__fadeInDown' id="s">
                {/* @ts-ignore */}
                <YourSvg  style={{width:'30px'}}></YourSvg>
                {/* @ts-ignore */}
                <On style={{width:'30px'}} className="mx-4 my-2"></On>
                {/* @ts-ignore */}
                <span style={{color:'white'}} className='barred'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>
              {/* @ts-ignore */}
              <div id="c">
                {/* @ts-ignore */}
                <YourSvg style={{width:'30px'}}></YourSvg>
                {/* @ts-ignore */}
                <On style={{width:'30px'}} className="mx-4 "></On>
                {/* @ts-ignore */}
                <span style={{color:'white'}} className='barred'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>



          </div>
        </div>
        {/* @ts-ignore */}
        <div className="b-space">
          
         {/* @ts-ignore */}
          <Popup trigger={<button className='btn my-btn'>
            {/* @ts-ignore */}
            <Add className='plus ms-3' style={{width:'23px'}}></Add>
            {/* @ts-ignore */}
            <span style={{fontSize:'15px',fontWeight:'600'}} className="mt-2 mx-3 sub">Nuova Voce</span>
          </button>} 
          modal
          >
            {/* @ts-ignore */}
            {close => (
            //@ts-ignore
              <div className='animate__animated animate__fadeInUp form-square'>
                {/* @ts-ignore */}
                <p onClick={handleClick}  className='distance-list' style={{color:'white'}}>{buttonText}</p> 
                {/* @ts-ignore */}
                <div className='distance'>
                  {/* @ts-ignore */}
                  <button  
                  className='btn my-btn2' 
                  type="submit" 
                  style={{fontSize:'15px',   fontWeight:'600'}} onClick={() => {  
                  console.log('modal closed');close();handleAdd();
                  }}>
                  
                    Salva
                  </button>
                </div>
              
            
           

            </div>
            
          
          )}
          
          </Popup>
        </div>
      </div>
    );
}
export default Box;
      





        

