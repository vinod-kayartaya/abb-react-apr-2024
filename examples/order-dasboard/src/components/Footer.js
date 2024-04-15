import React from 'react';
import withBorder from '../hoc/withBorder';

export const Footer = () => {
  return (
    <>
      <div className='text-center'>
        &copy; all rights reserved by{' '}
        <a href='https://vinod.co'>Learn with Vinod</a>
      </div>
    </>
  );
};

export default Footer;

export const FooterWithBorder = withBorder(Footer, {
  style: 'dashed',
  color: 'blue',
  width: '5px',
});
