import { type SchemaTypeDefinition } from 'sanity'
import HomeSchema from './home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [HomeSchema],
}
