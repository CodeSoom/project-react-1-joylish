import styled from '@emotion/styled';

const Container = styled.header({
  height: '170px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '25px',

  '.logoContainer': {
    height: '100%',
    width: '200px',
    padding: '25px',
  },

  '.logo': {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  '.options': {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    '.option': {
      padding: '10px 15px',
    },
  },
});

export default Container;
