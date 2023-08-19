/* eslint-disable react/jsx-props-no-spreading */
// utils
import 'src/utils/highlight';
import ReactMarkdown from 'react-markdown';
// markdown plugins
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
// @mui
import Link from '@mui/material/Link';
// routes
// import { RouterLink } from 'src/routes/components';
//
import Image from '../image';
//
import StyledMarkdown from './styles';
import { MarkdownProps } from './types';
import RouterLink from '../router-link';

// ----------------------------------------------------------------------

const Markdown = ({ sx, ...other }: MarkdownProps) => {
  return (
    <StyledMarkdown sx={sx}>
      <ReactMarkdown
        rehypePlugins={[
          rehypeRaw,
          rehypeHighlight,
          [remarkGfm, { singleTilde: false }],
        ]}
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        components={components}
        {...other}
      />
    </StyledMarkdown>
  );
};

// ----------------------------------------------------------------------

const components = {
  img: ({ ...props }) => (
    <Image alt={props.alt} ratio="16/9" sx={{ borderRadius: 2 }} {...props} />
  ),
  a: ({ ...props }) => {
    const isHttp = props.href.includes('http');

    return isHttp ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <Link component={RouterLink} href={props.href} {...props}>
        {props.children}
      </Link>
    );
  },
};
export default Markdown;
