import React from 'react';

const ProfileDivider = ({ title }) => {
  return (
    <section className="py-3 border-b-2 border-button-group-border-grey">
      <h3 className="font-bold">{title || 'NFT'}</h3>
    </section>
  );
};

export default ProfileDivider;
