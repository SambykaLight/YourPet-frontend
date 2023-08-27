export const containerStyles = {
  height: '100vh',
  backgroundImage: {
    mobile: `url(${require('../../images/dogsFont/Mobile/mb-dogs-2x.png')})`,
    tablet: `url(${require('../../images/dogsFont/Tablet/tb-dogs-2x.png')})`,
    desktop: `url(${require('../../images/dogsFont/Desktop/lg-dogs-2x.png')})`,
  },
  backgroundRepeat: { mobile: 'no-repeat' },

  backgroundPosition: {
    mobile: 'top 90px left 50%',
    tablet: 'top 150px left 50%',
    desktop: 'right -80px',
  },
  backgroundSize: {
    mobile: '140%',
    tablet: '130%',
    desktop: '60%',
  },
};

export const boxStyles = {
  width: '7rem',
};

export const titleStyles = {
  pt: { mobile: '25px', tablet: '52px', desktop: '100px' },
  textAlign: { tablet: 'left' },
  display: { desktop: 'flex' },
  alignItems: { desktop: 'center' },
  fontFamily: 'var(--primary-font)',
  fontWeight: '800',
  fontSize: { mobile: '10vw', tablet: '9vw', desktop: '5vw' },
  lineHeight: { mobile: '13vw', tablet: '13vw', desktop: '7vw' },
  width: { mobile: '90vw', tablet: '90vw', desktop: '40vw' },
};
