import { redirects as manualRedirects } from './redirects-manual';
import generatedRedirects from './generated-redirects.json';

// Deduplicate generated redirects based on source
const uniqueGeneratedRedirects = generatedRedirects.filter((obj, index, self) =>
  index === self.findIndex((t) => (
    t.source === obj.source
  ))
);

export const redirects = [
  ...manualRedirects,
  ...uniqueGeneratedRedirects
];
