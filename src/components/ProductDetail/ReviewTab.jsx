import React from 'react';
import Box from '@mui/material/Box';
import {
  Avatar,
  Divider,
  FormControl,
  Grid,
  LinearProgress,
  MenuItem,
  Pagination,
  Rating,
  Select
} from '@mui/material';
import { BodyText, BodyText2, Heading, SmallText, Title } from '../Typography';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const AboutTab = () => {
  return (
    <Box mt={2}>
      <Title>Reviews and Ratings</Title>
      <Box display={'flex'} alignItems={'center'}>
        <Box width={'40%'}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Heading>4.9</Heading> <SmallText>/ 5.0</SmallText>
          </Box>
          <Rating name="simple-controlled" value={'4.5'} precision={0.5} />
        </Box>
        <Box width={'60%'}>
          <Box width={1} display={'flex'} alignItems={'center'} gap={1}>
            <Box color={'#f9a23b'}>
              <StarRoundedIcon />
            </Box>
            <Box>5</Box>
            <Box width={'100%'}>
              <LinearProgress variant={'determinate'} value={'30'} />
            </Box>
            <Box>
              <BodyText>1.5K</BodyText>
            </Box>
          </Box>
          <Box width={1} display={'flex'} alignItems={'center'} gap={1}>
            <Box color={'#f9a23b'}>
              <StarRoundedIcon />
            </Box>
            <Box>4</Box>
            <Box width={'100%'}>
              <LinearProgress variant={'determinate'} value={'60'} />
            </Box>
            <Box>
              <BodyText>2.1K</BodyText>
            </Box>
          </Box>
          <Box width={1} display={'flex'} alignItems={'center'} gap={1}>
            <Box color={'#f9a23b'}>
              <StarRoundedIcon />
            </Box>
            <Box>3</Box>
            <Box width={'100%'}>
              <LinearProgress variant={'determinate'} value={'20'} />
            </Box>
            <Box>
              <BodyText>1K</BodyText>
            </Box>
          </Box>
          <Box width={1} display={'flex'} alignItems={'center'} gap={1}>
            <Box color={'#f9a23b'}>
              <StarRoundedIcon />
            </Box>
            <Box>2</Box>
            <Box width={'100%'}>
              <LinearProgress variant={'determinate'} value={'25'} />
            </Box>
            <Box>
              <BodyText>1.2K</BodyText>
            </Box>
          </Box>
          <Box width={1} display={'flex'} alignItems={'center'} gap={1}>
            <Box color={'#f9a23b'}>
              <StarRoundedIcon />
            </Box>
            <Box>1</Box>
            <Box width={'100%'}>
              <LinearProgress variant={'determinate'} value={'10'} />
            </Box>
            <Box>
              <BodyText>10</BodyText>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box mt={2}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Title>Top Reviews:</Title>
            <SmallText>Showing 3 of 100 Reviews</SmallText>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select value={'popular'}>
                <MenuItem value={'popular'}>Popular</MenuItem>
                <MenuItem value={'recent'}>Recent</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Box mt={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <Avatar alt="Remy Sharp" src="/assets/users/user.jpeg" />
              <BodyText>John Doe</BodyText>
            </Box>
            <Box display={'flex'} alignItems={'flex-start'} gap={1}>
              <Box color={'#f9a23b'}>
                <StarRoundedIcon />
              </Box>
              <BodyText>5.0</BodyText>
            </Box>
          </Box>
          <Box mt={2} px={1}>
            <BodyText2>According to my expectation this is good</BodyText2>
          </Box>
        </Box>
        <Box>
          <Box mt={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <Avatar alt="Remy Sharp" src="/assets/users/user.jpeg" />
              <BodyText>John Doe</BodyText>
            </Box>
            <Box display={'flex'} alignItems={'flex-start'} gap={1}>
              <Box color={'#f9a23b'}>
                <StarRoundedIcon />
              </Box>
              <BodyText>5.0</BodyText>
            </Box>
          </Box>
          <Box mt={2} px={1}>
            <BodyText2>According to my expectation this is good</BodyText2>
          </Box>
        </Box>
        <Box>
          <Box mt={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <Avatar alt="Remy Sharp" src="/assets/users/user.jpeg" />
              <BodyText>John Doe</BodyText>
            </Box>
            <Box display={'flex'} alignItems={'flex-start'} gap={1}>
              <Box color={'#f9a23b'}>
                <StarRoundedIcon />
              </Box>
              <BodyText>5.0</BodyText>
            </Box>
          </Box>
          <Box mt={2} px={1}>
            <BodyText2>According to my expectation this is good</BodyText2>
          </Box>
        </Box>
      </Box>
      <Box my={2}>
        <Pagination count={5} color="primary" />
      </Box>
    </Box>
  );
};

export default AboutTab;
