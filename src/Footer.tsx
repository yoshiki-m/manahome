import * as React from 'react';
import { VFC } from 'react';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Stack from '@material-ui/core/Stack';
import { Grid } from '@material-ui/core';

const Copyright: VFC = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="/#">
      mana Corp.
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

interface FooterProps {
  description: string;
  title: string;
  social: {
    icon: React.ElementType;
    name: string;
  };
}

const Footer: VFC<FooterProps> = (props) => {
  const { description, title, social } = props;

  return (

        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
          <Grid maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              {description}
            </Typography>
            <Link
              display="block"
              variant="body1"
              href="https://twitter.com/mana_best_arch"
              key={social.name}
              sx={{ mx: "auto", width: 80 }}
              
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <social.icon />
                <span>{social.name}</span>
              </Stack>
            </Link>
            <Copyright />
          </Grid>
        </Box>




  );
};

export default Footer;
