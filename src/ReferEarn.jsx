import { AccountCircle, Brightness4, Brightness7, Note, Wallet } from '@mui/icons-material';
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import AnniversaryImage from './Image1.png';
import Navbar3 from './Navbar3';
import { ThemeContext } from './ThemeContext';
const ReferEarn = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
    },
    validationSchema: Yup.object({
      referrerName: Yup.string().required('Required'),
      referrerEmail: Yup.string().email('Invalid email address').required('Required'),
      refereeName: Yup.string().required('Required'),
      refereeEmail: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      axios.post('http://localhost:5000/api/referrals', values)
        .then(response => {
          console.log(response.data);
          handleClose();
        })
        .catch(error => {
          console.error('There was an error submitting the referral!', error);
        });
    },
  });
  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ paddingRight: '1300px' }} sx={{ flexGrow: 1 }}>
            <strong style={{ fontSize: '35px' }}>accredian</strong> 
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit" onClick={handleClickOpen}>Refer & Earn</Button>
          <IconButton edge="end" color="inherit" aria-label="mode" onClick={toggleTheme}>
            {theme.background === '#fff' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div>
      <div 
        className="group-22081"
        style={{
          position: 'absolute',
          width: '797px',
          height: '63px',
          left: 'calc(50% - 797px/2 - 0.5px)',
          top: '10px',
          background: theme.background,
        }}
      />
      <div
        className="rectangle-10"
        style={{
          position: 'absolute',
          width: '797px',
          height: '63px',
          left: '561px',
          top: '136px',
          background: 'rgba(26, 115, 232, 0.11)',
          borderRadius: '38px',
          
        }}
      />
      <div
        className="benefits"
        style={{
          position: 'absolute',
          width: '132px',
          height: '32px',
          left: '800px',
          top: '148px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '25px',
          lineHeight: '22px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: theme.color,
        }}
      >
        Benefits
      </div>
      <div
        className="faqs"
        style={{
          position: 'absolute',
          width: '127px',
          height: '28px',
          left: '992px',
          top: '148px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '25px',
          lineHeight: '22px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: theme.color,
        }}
      >
        FAQs
      </div>
      <div
        className="support"
        style={{
          position: 'absolute',
          width: '127px',
          height: '28px',
          left: '1179px',
          top: '148px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '25px',
          lineHeight: '22px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: theme.color,
        }}
      >
        Support
      </div>
      <div
        className="group-22080"
        style={{
          position: 'absolute',
          width: '127px',
          height: '41px',
          left: '613px',
          top: '193px',
        }}
      />
      <div
        className="refer"
        style={{
          position: 'absolute',
          width: '127px',
          height: '35px',
          left: '613px',
          top: '148px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '25px',
          lineHeight: '22px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#1A73E8',
        }}
      >Refer</div>
      <div
        className="ellipse-1"
        style={{
          position: 'absolute',
          width: '6px',
          height: '6px',
          left: '640px',
          top: '180px',
          background: '#1A73E8',
          borderRadius: '50%',
        }}
      />
    </div>
      <div style={{ position: 'absolute', width: '1260px', height: '692px', left: '280px', top: '269px', background: theme.background, boxShadow: '0px 10px 75px 5px rgba(0, 7, 43, 0.21)', borderRadius: '29px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '502px', height: '190px', left: '100px', top: '250px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '700', fontSize: '88px', lineHeight: '88px', display: 'flex', alignItems: 'center', color: theme.color }}>
          Let’s Learn & Earn
        </div>
        <div style={{ position: 'absolute', width: '415px', height: '140px', left: '125px', top: '423px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '400', fontSize: '40px', lineHeight: '65px', display: 'flex', alignItems: 'center', color: theme.color }}>
          Get a chance to win up-to Rs. 15,000
        </div>
        <Button variant="contained" color="primary" style={{ position: 'absolute', width: '192px', height: '54px', left: '225px', top: '620px', borderRadius: '8px', background: '#1A73E8' }} onClick={handleClickOpen}>
          Refer Now
        </Button>
        <img src={AnniversaryImage} alt="Anniversary Image" style={{ position: 'absolute', width: '800px', height: '700px', left: '600px', top: '0px' }} />
      </div>
                        

      <div style={{ display: 'flex', border: '0px solid black', margin: '50px auto', width: '1300px', height: '300px', marginTop: '1000px', marginBottom: '150px' }}>
      <div style={{ flex: 1, margin: '15px', padding: '40px', border: '2px solid #ccc', width: '90px', height: '270px', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'transform 0.5s ease, box-shadow 0.5s ease', cursor: 'pointer', backgroundColor: theme.background, color: theme.color }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-40px)'; e.currentTarget.style.boxShadow = '0px 15px 15px rgb(122, 163, 218)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
        <AccountCircle style={{ fontSize: '80px', color: '#1A73E8', marginBottom: '10px' }} />
        <p style={{ textAlign: 'center', fontSize: '16px', color: theme.color }}>Submit referrals easily via our website’s referral section.</p>
      </div>
      <div style={{ flex: 1, margin: '15px', padding: '40px', border: '2px solid #ccc', width: '90px', height: '270px', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', backgroundColor: theme.background, color: theme.color }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-40px)'; e.currentTarget.style.boxShadow = '0px 15px 15px rgb(122, 163, 218)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
        <Note style={{ fontSize: '80px', color: '#1A73E8', marginBottom: '10px' }} />
        <p style={{ textAlign: 'center', fontSize: '16px', color: theme.color }}>Earn rewards once your referral joins an Accredian program.</p>
      </div>
      <div style={{ flex: 1, margin: '15px', padding: '40px', border: '2px solid #ccc', width: '90px', height: '270px', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', backgroundColor: theme.background, color: theme.color }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-40px)'; e.currentTarget.style.boxShadow = '0px 15px 15px rgb(122, 163, 218)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
        <Wallet style={{ fontSize: '80px', color: '#1A73E8', marginBottom: '10px' }} />
        <p style={{ textAlign: 'center', fontSize: '16px', color: theme.color }}>Both parties receive a bonus 30 days after program enrollment.</p>
      </div>
      </div>  
      <Navbar3/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Refer a Friend</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="dense"
              id="referrerName"
              name="referrerName"
              label="Your Name"
              fullWidth
              variant="standard"
              value={formik.values.referrerName}
              onChange={formik.handleChange}
              error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
              helperText={formik.touched.referrerName && formik.errors.referrerName}
            />
            <TextField
              margin="dense"
              id="referrerEmail"
              name="referrerEmail"
              label="Your Email"
              fullWidth
              variant="standard"
              value={formik.values.referrerEmail}
              onChange={formik.handleChange}
              error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
              helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
            />
            <TextField
              margin="dense"
              id="refereeName"
              name="refereeName"
              label="Friend's Name"
              fullWidth
              variant="standard"
              value={formik.values.refereeName}
              onChange={formik.handleChange}
              error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
              helperText={formik.touched.refereeName && formik.errors.refereeName}
            />
            <TextField
              margin="dense"
              id="refereeEmail"
              name="refereeEmail"
              label="Friend's Email"
              fullWidth
              variant="standard"
              value={formik.values.refereeEmail}
              onChange={formik.handleChange}
              error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
              helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ReferEarn;




