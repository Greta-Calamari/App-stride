import '../css/style.css';
import 'animate.css';
import { useState, useRef } from 'react';
import { ReactComponent as YourSvg } from '../img/Bin.svg';
import { ReactComponent as Add } from '../img/Adds.svg';
import { ReactComponent as Off } from '../img/Checkbox_Off.svg';
import { ReactComponent as On } from '../img/Checkbox_On.svg';
// import Input from './input';
import ListItem, { ListItemData } from './listItem';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from 'react';


function Box() {


  const [ items, updateItems ] = useState([
    { label: 'Farsi assumere', isChecked: false },
    { label: 'Sviluppo dei componenti', isChecked: true },
    { label: 'Creazione dell\'app', isChecked: true },
    { label: 'Implementazione della logica', isChecked: true },
    { label: 'Sviluppo CSS', isChecked: true },
  ] as ListItemData[]);



  // function handleDelete() {
  //   (document.getElementById('ab') as HTMLFormElement).style.display = "none";
  //   (document.getElementById('s') as HTMLFormElement).style.display = "block";
  // }

  // function handleBin() {
  //   (document.getElementById('n') as HTMLFormElement).style.display = "none";
  //   const oggetto1 = document.getElementById('s');
  //   // l'oggetto potrebbe essere null typescript lo da errore . se io aggiungo l'operatore ?. mi consenbte di leggerne la proprieta' , cosi' type e' contento
  //   oggetto1?.classList.remove('animate__animated', 'animate__fadeInDown');
  //   const oggetto2 = document.getElementById('c');
  //   oggetto1?.classList.add('animate__animated', 'animate__fadeInDown');
  //   oggetto2?.classList.add('animate__animated', 'animate__fadeInDown');
  // }

  /** Sort the items by boolean values */
  function sortByChecked() {
    const updatedItems = [...items];
    updatedItems.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
    updateItems(updatedItems);
  }

  /** User is deleting the item */
  function handleDelete(el: ListItemData, index: number) {
    const newList = [...items]
    // remove the element from the list
    newList.splice(index, 1)
    updateItems(newList);
  }

  /** User is changing the checkbox state */
  function handleChange(el: ListItemData, index: number) {
    // duplicate state value & update it
    const updatedItems = [...items];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;
    updateItems(updatedItems);
    sortByChecked();
  }

  const inputRef = useRef(null);
  
  function handleClick() {
    {/* @ts-ignore */}
    const value = inputRef.current.value;
    // qui pusho l'elemento nello state
    updateItems([...items, {label:value, isChecked:false}]);

   
}

    

    



  return (
    <div className="container my-container">
      <div className="box">
        <div className='l-box'>
          <h1 className="title">Cose da fare</h1>

          {/* LISTA DI ELEMENTI */}
          { items.map((d, i) => (
            <ListItem
              key={i}
              label={d.label}
              onChange={() => handleChange(d, i)}
              onDelete={() => handleDelete(d, i)}
              isChecked={d.isChecked}
            />
          ))}

          {/* <div className='none animate__animated animate__fadeInDown' id="s">
            <YourSvg style={{ width: '30px' }}></YourSvg>
            <On style={{ width: '30px' }} className="mx-4 my-2"></On>
            <span style={{ color: 'white' }} className='barred'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
          </div>

          <div id="c">
            <YourSvg style={{ width: '30px' }}></YourSvg>
            <On style={{ width: '30px' }} className="mx-4 "></On>
            <span style={{ color: 'white' }} className='barred'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non risus quis mauris aliquam quis</span>
          </div> */}

        </div>
      </div>

      <div className="b-space">
        <Popup trigger={<button id="btn-" className='btn my-btn'>
          <Add className='plus ms-3' style={{ width: '23px' }}></Add>
          <span style={{ fontSize: '15px', fontWeight: '600' }} className="mt-2 mx-3 sub" >Nuova Voce</span>
        </button>}
          modal
        >
          {/* @ts-ignore */}
          {close => (
            <div className='animate__animated animate__fadeInUp form-square'>
                <form>
                  <label>
                    <input
                        ref={inputRef}
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Inserisci nuona voce'
                        className='distance-list'
                    />
                  <div className='distance'>
                    <input                 
                        type="button"
                        value="Salva"
                        className='btn my-btn2'
                        style={{ fontSize: '15px', fontWeight: '600'}}
                        onClick={() => {
                          handleClick();
                          close();
                        }}
                        
                        
                      />
                        
                  </div>
                  </label>
                  
                </form>
            </div>
          )}
        </Popup>
      </div>
    </div>
              
              
  );
}
export default Box;
function preventDefault(arg0: number, preventDefault: any): React.MouseEventHandler<HTMLButtonElement> | undefined {
  throw new Error('Function not implemented.');
}

