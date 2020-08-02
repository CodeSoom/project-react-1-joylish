import styled from '@emotion/styled';

const CategoryItemContainer = styled.div(({ onClick }) => ({
  onClick,
  display: 'flex',
  alignItems: 'center',
  minWidth: '30%',
  height: '330px',
  flex: '1 1 auto',
  justifyContent: 'center',
  borderRadius: '1em',
  margin: '0 7.5px 15px',
  overflow: 'hidden',
  '&:hover': {
    cursor: 'pointer',
    '& .background-image': {
      transform: 'scale(1.1)',
      filter: 'brightness(80%)',
      transition: 'transform 6s cubic-bezier(0.35, 0.45, 0.45, 0.95)',
    },
    '& .content': {
      opacity: 0.9,
      '& .title': {
        color: '#0099a4',
      },
    },
  },

  '&.large': {
    height: '380px',
  },

  '&:first-of-type': {
    marginRight: '7.5px',
  },

  '&:last-child': {
    marginLeft: '7.5px',
  },

  '.background-image': {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  '.content': {
    height: '90px',
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1em',
    backgroundColor: 'white',
    opacity: '0.7',
    position: 'absolute',

    '.title': {
      fontWeight: 'bold',
      margin: '0 6px 0',
      fontSize: '22px',
      color: '#800000',
    },

    '.subtitle': {
      fontWeight: 'lighter',
      fontSize: '16px',
    },
  },
}));

export default CategoryItemContainer;
