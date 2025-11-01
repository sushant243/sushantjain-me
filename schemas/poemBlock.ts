import { defineType, defineArrayMember } from 'sanity'

export const poemBlock = defineType({
  title: 'Poem Block Content',
  name: 'poemBlock',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    }),
  ],
})
