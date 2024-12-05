import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { Box, Typography, Alert, TextField } from '@mui/material';
import colors from '../../styles/colors';
import Modal from '@mui/material/Modal';
import emailjs from 'emailjs-com'

const CTA = ({}) => {

    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', enquiry: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // EmailJS configuration
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    
        emailjs
          .send(serviceId, templateId, formData, publicKey)
          .then(() => {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', enquiry: '' });
          })
          .catch((err) => {
            setError('Something went wrong. Please try again.');
            console.error(err);
          });
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
    };

  return (
    <Box>
        <Button 
            variant='contained'
            sx={{
                backgroundColor: colors.background,
                color: colors.typeWriteTextColor,
                borderRadius: '1px',
                border: `1px solid ${colors.typeWriteTextColor}`,
                marginTop: '2rem',
                '&:hover': {
                    color: colors.background,
                    backgroundColor: colors.typeWriteTextColor,
                },
                transition: 'all 0.5s ease', 
            }}
            onClick={handleOpen}
        >
            Contact Me Here
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Get in Touch
                </Typography>
                {isSubmitted && <Alert severity="success">Message sent successfully!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    label="Enquiry"
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    fullWidth
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    fullWidth
                    sx={{ padding: '0.8rem', backgroundColor: colors.typeWriteTextColor }}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    </Box>

  )
}

export default CTA