import React, { useState } from 'react';
import Tab from '..';
import {
  arts,
  music,
  game,
  film,
  champion,
  starCup,
  gameWhite,
  filmWhite,
  musicWhite,
  artsWhite,
} from '../../../../public/assets/icons';

const TabGroup = ({ active, setActive }) => {
  return (
    <section className="border-b-2 border-light-grey-2 p-0">
      <div className="flex items-center">
        <div>
          <Tab
            active={active === 'all'}
            onClick={() => setActive('all')}
            baseIcon={starCup}
            activeIcon={champion}
          />
        </div>
        <div className="ml-10">
          <Tab
            active={active === 'game'}
            onClick={() => setActive('game')}
            label="Game"
            baseIcon={game}
            activeIcon={gameWhite}
          />
        </div>
        <div className="ml-10">
          <Tab
            active={active === 'film'}
            onClick={() => setActive('film')}
            label="Film"
            baseIcon={film}
            activeIcon={filmWhite}
          />
        </div>
        <div className="ml-10">
          <Tab
            active={active === 'music'}
            onClick={() => setActive('music')}
            label="Music"
            baseIcon={music}
            activeIcon={musicWhite}
          />
        </div>
        <div className="ml-10">
          <Tab
            active={active === 'arts'}
            onClick={() => setActive('arts')}
            label="Arts"
            baseIcon={arts}
            activeIcon={artsWhite}
          />
        </div>
      </div>
    </section>
  );
};

export default TabGroup;
