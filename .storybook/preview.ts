import type { Preview } from "@storybook/react";

import '../src/app/globals.css'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      document.documentElement.setAttribute('data-mode', context.globals.theme);
      document.documentElement.setAttribute('data-font', context.globals.font);
      document.documentElement.setAttribute('data-motion', context.globals.animation);
      return Story();
    }],
  parameters: {
    backgrounds: { disable: true },
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
    font: {
      name: 'Font',
      description: 'Global font for components',
      toolbar: {
        title: 'Font',
        icon: 'document',
        items: ['system', 'dyslexic'],
        dynamicTitle: true,
      }
    },
    animation: {
      name: 'Reduce Motion',
      description: 'Global reduce motion for components',
      toolbar: {
        title: 'Reduce Motion',
        icon: 'play',
        items: ['system', 'on', 'off'],
        dynamicTitle: true,
      },
    }
  },
  initialGlobals: {
    theme: 'dark',
    font: 'system',
    animation: 'system',
  },
};

export default preview;
