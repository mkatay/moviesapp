import React,{useState} from 'react'
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export const SingleChip = ({name,id,selectedGenres,setSelectedGenres}) => {
    const [selected,setSelected]=useState(false)

    const handleClick = (id) => {
        console.log(id);
        console.info('You clicked the Chip.');
        if(selectedGenres.indexOf(id) === -1){
          setSelected(true)
          setSelectedGenres((prev)=>[...prev,id])
        }
        else{
            setSelected(false)
            setSelectedGenres(selectedGenres.filter(item=>item != id))
        }
            
      };
  return (
    <Chip
    label={name}
    clickable
    onClick={()=>handleClick(id)}
    color='secondary'
    sx={{margin:'2px'}}
    icon={selected ? <DoneIcon /> : <RadioButtonUncheckedIcon /> }
/>
  )
}

