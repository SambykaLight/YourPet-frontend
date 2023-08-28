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
    desktop: '70%',
  },
};

export const boxStyles = {
  width: '7rem',
};

export const titleStyles = {
  pt: { mobile: '25px', tablet: '52px' },
  pr: { tablet: '148px', desktop: '0' },
  p: { desktop: 'auto' },
  textAlign: { mobile: 'center', tablet: 'left' },
  display: { desktop: 'flex' },
  alingItems: { desktop: 'center' },
  fontFamily: 'Manrope',
  fontWeight: '700',
  fontSize: { mobile: '32px', tablet: '68px' },
  lineHeight: { mobile: '44px', tablet: '100px', desktop: '88,4px' },
  width: { desktop: '501px' },
};
