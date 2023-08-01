import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useQuery } from 'react-query';
import { getData } from '../utils';
import {img_500} from '../utils'
import {img_300} from '../utils'
import { imgUnavailable } from '../utils'
import './ContentModal.css'
import { Box} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Carousel } from './Carousel';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxWidth: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  fontFamily: 'Montserrat',
  overflow: 'scroll',
  marginTop:20,

};

export const ContentModal=({children,type,id})=> {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const urlDetails=`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
  const {data,status}=useQuery(['details',urlDetails],getData)

  const urlVideos=`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;
  const {data:dataVideos,status:statusVideos}=type=='movie' ? useQuery(['videos',urlVideos],getData):{}



  //console.log(type,id);
//status=='success' && console.log(data);
statusVideos=='success' && console.log(dataVideos?.results[0]);
  return (
    <div >
      <Button onClick={handleOpen} className="single-content" >
        {children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           {status=='success' &&
            <div className="content-modal">
              <img  src={data.backdrop_path ? img_300+data.backdrop_path : imgUnavailable} alt={data?.title || data?.name} />
              <Box sx={{display:'flex',flexDirection:'column'}}>
                <div><b>{data?.title || data?.name}</b>({(data?.release_date||data?.first_air_date)||data?.published_at})</div>
                <div className="tagline"><i>{data.tagline}</i></div>
                <div className="overview">{data.overview}</div>
            </Box>
            </div>
            } 
            <div><Carousel type={type} id={id}/></div>  
            {statusVideos && dataVideos?.results && dataVideos.results.length>0 && <div>
                    <Button
                      className="video"
                      variant='contained'
                      startIcon={<YouTubeIcon />}
                      color='secondary'
                      target='_blank'
                      href={`https://www.youtube.com/watch?v=${dataVideos?.results[0].key}`}
                    >
                      Watch the trailer
                    </Button>
                </div>
             
            }
         
      </Box>
      </Fade>
    </Modal>
    </div>
  );
}
