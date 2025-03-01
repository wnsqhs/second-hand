import { useState } from 'react';

import DropdownPanel from './DropdownPanel';
import Icon from '../Icon';
import * as S from './styles';

interface DropdownProps {
  options: string[];
}

const Dropdown = ({ options }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // TODO(sarang_daddy) : "내 동네 변경하기" 기능 추후 추가 필요
  const handleChangeOptionClick = () => {
    console.log('동네 변경 페이지로 넘어간다.');
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownWrapper />
      <S.DropdownHeader onClick={toggleDropdown}>
        <S.SelectedOption>{selectedOption}</S.SelectedOption>
        <Icon name={'chevronDown'} width="17" />
      </S.DropdownHeader>
      {isOpen && (
        <S.PanelContainer>
          {options.map((option, index) => (
            <DropdownPanel
              key={index}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
          <DropdownPanel
            key={2}
            option={'내 동네 변경하기'}
            onClick={handleChangeOptionClick}
            isLastPanel={true}
          />
        </S.PanelContainer>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
