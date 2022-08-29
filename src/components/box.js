
import '../css/style.css';
import { ReactComponent as YourSvg } from '../img/Bin.svg';
import { ReactComponent as Add } from '../img/Adds.svg';
import { ReactComponent as Off } from '../img/Checkbox_Off.svg';
import { ReactComponent as On } from '../img/Checkbox_On.svg';








function Box(){
    return(
      <div className="container my-container">
        <div className="box">
          <div className='l-box'>
              <h1 className="title">Titolo</h1>
              <div> 
               <YourSvg style={{width:'30px'}}></YourSvg>
               <Off style={{width:'30px'}} className="mx-4"></Off>
               <span style={{color:'white'}}>inserire testo</span>
              </div>

              <div>
                <YourSvg style={{width:'30px'}}></YourSvg>
                <On style={{width:'30px'}} className="mx-4 my-3"></On>
                <span style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>

              <div>
                <YourSvg style={{width:'30px'}}></YourSvg>
                <On style={{width:'30px'}} className="mx-4 "></On>
                <span style={{color:'white'}} className='barred'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
              </div>



          </div>
        </div>
        <div className="b-space">
          <button className='btn my-btn '>
            <Add className='plus ms-3' style={{width:'23px'}}></Add>
            <span style={{fontSize:'15px',fontWeight:'600'}} className="mt-2 mx-3 sub">Nuova Voce</span>
          </button>
        </div>
      </div>
    );
}
export default Box;


        

