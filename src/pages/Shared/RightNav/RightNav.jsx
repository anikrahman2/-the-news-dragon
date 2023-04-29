import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className='mt-4'>Login With</h4>
      <Button className='mb-2' variant="outline-primary">< FaGoogle className='me-2'/>Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub className='me-2'/>Login With Github</Button>
      <div className='mt-4'>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook className='me-3'/>Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className='me-3'/>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram className='me-3'/>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div className='position-relative text-white text-center'>
        <img className='w-100' src={bg} alt="" />
        <div className='position-absolute bottom-50'>
          <h2 className='mb-5'>Create an Amazing Newspaper</h2>
          <p className='mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <button className='btn btn-danger'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;