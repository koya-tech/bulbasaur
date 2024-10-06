import type { Preview } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css'; // replace with the name of your tailwind css file
import React from "react";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />  {/* JSX.Elementが返される */}
      </MemoryRouter>
    ),
  ],
};

export default preview;
