import { Typography } from '@mui/material';

export const SmallText = ({ children, ...props }) => (
  <Typography color={'text.secondary'} fontSize={'.66rem'} variant={'body2'} {...props}>
    {children}
  </Typography>
);
export const BodyText = ({ children, ...props }) => (
  <Typography
    {...props}
    color={'text.primary'}
    fontSize={'0.8rem'}
    fontWeight={700}
    variant={'body1'}>
    {children}
  </Typography>
);
export const BodyText2 = ({ children, ...props }) => (
  <Typography
    {...props}
    color={'text.secondary'}
    fontWeight={500}
    fontSize={'0.8rem'}
    variant={'body2'}>
    {children}
  </Typography>
);
export const Title = ({ children, ...props }) => (
  <Typography {...props} variant={'h6'} fontWeight={'700'} fontSize={'.9rem'} lineHeight={1.4}>
    {children}
  </Typography>
);
export const Heading = ({ children, ...props }) => (
  <Typography variant={'h2'} fontWeight={'600'}>
    {children}
  </Typography>
);
export const H4 = ({ children, ...props }) => (
  <Typography variant={'h4'} {...props} fontWeight={'700'} fontSize={'1.4rem'}>
    {children}
  </Typography>
);
export const Overline = ({ children, ...props }) => (
  <Typography variant={'overline'} {...props}>
    {children}
  </Typography>
);
