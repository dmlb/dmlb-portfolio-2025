import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import { iconPicker } from 'sanity-plugin-icon-picker';

export default defineConfig({
  name: 'default',
  title: 'dmlb',
  projectId: 'c0x11o02',
  dataset: 'posts',

  plugins: [structureTool(), visionTool(), media(), iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
