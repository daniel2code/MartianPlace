import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addBanner, removeBanner } from '../store/slices/bannerSlice';

const profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addBanner('profileB'))

    return () => dispatch(removeBanner())
  }, [])

  return (
    <div className='mx-5 md:mx-40 sm:mx-10 mt-20 mb-5'>
        <h1>Profile</h1>
    </div>
  )
}

export default profile