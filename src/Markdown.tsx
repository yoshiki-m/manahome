import * as React from 'react';
import { VFC } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

// function MarkdownListItem(props: any) {
//   return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
// }
/* eslint-disable */
const MarkdownListItem: VFC = (props: any) => (
  <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />
);
/* eslint-enable */
const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

// export default function Markdown(props: any) {
//   return <ReactMarkdown options={options} {...props} />;
// }
/* eslint-disable */
export default function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} />;
}
/* eslint-enable */
