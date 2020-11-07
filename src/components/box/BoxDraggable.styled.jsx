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
)(() => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
