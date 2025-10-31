import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from '@/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '84visgb1'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Sushant Jain Admin',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Journal')
              .icon(() => '📖')
              .child(S.documentTypeList('journal').title('Journal Entries')),
            S.listItem()
              .title('Essays')
              .icon(() => '✍️')
              .child(S.documentTypeList('essay').title('Essays')),
            S.listItem()
              .title('Poetry')
              .icon(() => '🎭')
              .child(S.documentTypeList('poem').title('Poems')),
            S.listItem()
              .title('Stories')
              .icon(() => '📚')
              .child(S.documentTypeList('story').title('Stories')),
            S.divider(),
            S.listItem()
              .title('Authors')
              .icon(() => '👤')
              .child(S.documentTypeList('author').title('Authors')),
            S.divider(),
            S.listItem()
              .title('Settings')
              .child(
                S.list()
                  .title('Settings')
                  .items([
                    S.listItem()
                      .title('Site Settings')
                      .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                  ])
              ),
          ]),
    }),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})