import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Delete from '../../assets/delete.svg';

interface ITabId {
  id: string;
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DeleteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const DeleteTabBtn = styled.img`
  margin: 10px 0;
  right: 0;
  cursor: pointer;
`;

const Toggle = muiStyled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 35,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#7163E8',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#7163E8',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function DeleteTab({ id }: ITabId) {
  // 탭 삭제 API 연결
  const onDelete = (id: string) => console.log(id);

  return (
    <DeleteWrapper>
      <Toggle {...label} defaultChecked />
      <DeleteTabBtn src={Delete} alt="delete" onClick={() => onDelete(id)} />
    </DeleteWrapper>
  );
}
