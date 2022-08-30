
import '../css/style.css';
import 'animate.css';
import {useState} from 'react';
import { ReactComponent as YourSvg } from '../img/Bin.svg';
import { ReactComponent as Add } from '../img/Adds.svg';
import { ReactComponent as Off } from '../img/Checkbox_Off.svg';
import { ReactComponent as On } from '../img/Checkbox_On.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';






function Box(){
  
  // const [showForm, setFormStatus] = useState(false);
  // const viewData = () => setFormStatus(true);


  
  const initialText = 'Inserisci voce';
  const [buttonText, setButtonText] = useState(initialText);

  function handleClick() {
    setButtonText('Seconda Voce');
  }


  function handleAdd(){
    document.getElementById('n').style.display = "block";
  }
  
  function handleDelete(){
    document.getElementById('ab').style.display = "none";
    document.getElementById('s').style.display = "block";

  }
  function handleBin(){
    document.getElementById('n').style.display = "none";
    const oggetto1 = document.getElementById('s');
    oggetto1.classList.remove('animate__animated', 'animate__fadeInDown');
    const oggetto2 = document.getElementById('c');
    oggetto1.classList.add('animate__animated', 'animate__fadeInDown');
    oggetto2.classList.add('animate__animated', 'animate__fadeInDown');



    
    
  }






 
 



  
    return(
      <div className="container my-container">
        <div className="box">
          <div className='l-box'>
              <h1 className="title">Titolo</h1>

              <div id="ab">
                <YourSvg  style={{width:'30px'}}></YourSvg>
                <Off onClick={handleDelete} style={{width:'30px'}} className="mx-4 my-1" > </Off>
                <span  style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>


              <div className='none animate__animated animate__fadeInUp' id="n"> 
               <YourSvg onClick={handleBin} style={{width:'30px'}}></YourSvg>
               <Off style={{width:'30px'}} className="mx-4 mb-1"></Off>
               <span style={{color:'white'}}>Seconda voce</span>
              </div>

              <div className='none animate__animated animate__fadeInDown' id="s">
                <YourSvg  style={{width:'30px'}}></YourSvg>
                <On style={{width:'30px'}} className="mx-4 my-2"></On>
                <span style={{color:'white'}} className='barred'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>
              <div id="c">
                <YourSvg style={{width:'30px'}}></YourSvg>
                <On style={{width:'30px'}} className="mx-4 "></On>
                <span style={{color:'white'}} className='barred'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>



          </div>
        </div>
        <div className="b-space">
          
         
          <Popup trigger={<button className='btn my-btn'>
            <Add className='plus ms-3' style={{width:'23px'}}></Add>
            <span style={{fontSize:'15px',fontWeight:'600'}} className="mt-2 mx-3 sub">Nuova Voce</span>
          </button>} 
          modal
          >
            {close => (
            
              <div className='animate__animated animate__fadeInUp form-square'>
                
                <p onClick={handleClick}  className='distance-list' style={{color:'white'}}>{buttonText}</p> 
                <div className='distance'>
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
        

        {/* {showForm && (
        <div className='animate__animated animate__fadeInUp form-square'>
            
           <p className='' style={{color:'white'}}>inserisci voce</p> 
            <div className='distance'>
            <button className='btn my-btn2' type="submit" style={{fontSize:'15px',fontWeight:'600'}}>Salva</button>
            </div>
          
        </div>

        
      )} */}



      </div>
    );
}
export default Box;


        

