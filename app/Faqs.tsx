import * as React from 'react';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordian from './Accordian'
import { width } from '@mui/system';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 700,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Faqs = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  





    return (
        <div >
            <Button onClick={handleOpen} className='text-[#535479]'>FAQs</Button>
            <Modal
                // sx={{ borderRadius: '5rem' }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                
            >
                <Fade in={open}>
                    <Box sx={style} className={`rounded-md`}>
                        <Accordian />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );

}

export default Faqs
