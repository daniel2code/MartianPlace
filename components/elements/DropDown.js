import styles from '../../styles/DropDown.module.scss'

const Dropdown = (props) => {
  const { id, label, value, options, onChange, placeHolder, parentstyles, selectStyles, labelstyles } = props;
  // const { id, title, placeHolder, leftIcon, rightIcon, parentstyles, textAreaStyles, label, labelstyles, rows, cols, maxLength } = props;

  return (
    <div className={``}>
      {label && <div className={labelstyles}><label >{label}</label></div>}
      <div className={`${styles.selectContainer} ${parentstyles}`}>
        <select value={value} onChange={onChange} id={id}>
          <option value={''} style={{ backgroundColor: 'black', color: 'green' }} key={`${value} -0`}>{placeHolder}</option>
          {options.map((option, index) => (
            <option value={option.value} style={{ backgroundColor: 'black', color: 'green' }} key={`${value} -${index}`}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown

/*


import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelect } from 'downshift';
import classNames from 'classnames';
import DropdownItem from './DropDownItem';

import styles from '../../styles/DropDown.module.scss';

const itemToString = (item) => item?.value ?? '';
const placeholderLabel = 'Choose your option';

const Dropdown = ({
    id,
    items,
    className,
    onStateChange,
    placeholderLabel,
    defaultSelectedItem,
    ...rest,
}) => {
    const {
        isOpen,
        selectedItem,
        highlightedIndex,
        getMenuProps,
        getItemProps,
        getToggleButtonProps,
    } = useSelect({ id, itemToString, items, onStateChange, defaultSelectedItem });

    const renderDropdownItems = useCallback(() => items.map((item, index) => (
        <DropdownItem
            item={ item }
            key={ `dropdown-item-${index}` }
            selected={ selectedItem === item }
            highlighted={ highlightedIndex === index }
            { ...getItemProps({ item, index }) } />
    )), [highlightedIndex, getItemProps, selectedItem, items]);

    return (
        <div { ...rest } className={ classNames(styles.container, className) }>
            <button
                className={ classNames(styles.trigger, { [styles.isOpen]: isOpen }) }
                { ...getToggleButtonProps() }>
                { selectedItem?.label ?? placeholderLabel }
            </button>
            <ul className={ styles.menu } { ...getMenuProps() }>
                { isOpen && renderDropdownItems() }
            </ul>
        </div>
    );
};

Dropdown.propTypes = {
    className: PropTypes.string,
    onStateChange: PropTypes.func,
    id: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    defaultSelectedItem: PropTypes.any,
    placeholderLabel: PropTypes.string,
};

export default Dropdown;


*/