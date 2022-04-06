import React from 'react';
import { useRouter } from 'next/router';

const SingleArtImage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>SingleImage with id : {id}</div>;
};

export default SingleArtImage;
