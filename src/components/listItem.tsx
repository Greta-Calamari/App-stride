import { ReactComponent as IconBin } from '../img/Bin.svg';
import { ReactComponent as IconAdd } from '../img/Adds.svg';
import { ReactComponent as IconUnchecked } from '../img/Checkbox_Off.svg';
import { ReactComponent as IconChecked } from '../img/Checkbox_On.svg';
import React from 'react';

export interface ListItemData {
  /** Stato della checkbox */
  isChecked: boolean;
  /** Testo dell'elemento */
  label: string;
  /** Evento di rimozione */
  onDelete?: () => void;
  /** Cambio di stato della checkbox */
  onChange?: () => void;
}

export default function ListItem({ isChecked, label, onChange, onDelete }: ListItemData) {
  return <div className='list-item'>
    <IconBin onClick={onDelete} style={{ width: '30px' }}></IconBin>
    { isChecked ? 
      <IconChecked onClick={onChange} style={{ width: '30px' }} className="mx-4 mb-1"></IconChecked>
      : <IconUnchecked onClick={onChange} style={{ width: '30px' }} className="mx-4 mb-1"></IconUnchecked>
    }
    <span 
      style={{ color: 'white' }}
      className={ isChecked ? 'strikethrough' : '' }
      onClick={onChange}>{label}</span>
  </div>
}
