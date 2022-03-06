import React from 'react';

const ListItem = ({ children }) => {
  return (
    <section className="border border-light-grey-2 text-base font-light px-8 py-6 text-light-grey-1 ">
      {children}
    </section>
  );
};

export default ListItem;
