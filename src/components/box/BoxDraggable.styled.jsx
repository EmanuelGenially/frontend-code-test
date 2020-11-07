import styled from 'styled-components';

export const Wrapper = styled.div.attrs(
  ({ color, width, height, left, top }) => ({
    style: {
      backgroundColor: color,
      width: width,
      height: height,
      transform: `translate(${left}px, ${top}px)`,
    },
  })
)(({ selected }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: selected ? '2px dashed #14FFD0' : '0px',
    boxSizing: 'border-box',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: selected ? '2px solid #1b1c41' : '0px',
    boxSizing: 'border-box',
  },
}));
