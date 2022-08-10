import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import VillageContext from '../../Context/villageContext';
import useVillage from '../../Context/villageContext';
import StateContext from '../../Context/StateContext';
import useUserStore from '../../store/userStore';
import { getVillage } from '../../adapters/requests/index';
import axios from 'axios'
import useAuthStore from './../../store/authStore';
import Input from './Input';
import ConditionalRenderedList from './ConditionalRenderedList';

const SelectVillage = ({ placeholder, states, setSelectedVillage, handleOnChange, setIsVillageEmpty }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState();

  const { userVillages } = useUserStore();
  
  return (
    <div>
      <div
        onClick={() =>setToggle(!toggle)}    
      >    
        <Input
          onChange={(inputValue) => {
            setValue(inputValue);
            setToggle(true);
            handleOnChange(inputValue);
          }}
          value={value}
          />
      </div>
      <ConditionalRenderedList
        value={value}
        villages={userVillages}
        setValue={(value) => {setValue(value); handleOnChange(value)}}
        toggle={toggle}
        setToggle={setToggle}
        setSelectedVillage={setSelectedVillage}
        setIsVillageEmpty={setIsVillageEmpty}
      />
    </div>
  );
};

export default SelectVillage;
