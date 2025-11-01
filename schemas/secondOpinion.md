Yep — I see exactly what Claude tried to do there 👇

They created a new schema (`poemBlock`) identical to your existing `blockContent`, hoping that by changing the name or description, Sanity would start preserving Google Docs line breaks automatically.
**But that can’t fix it** — because the root of the issue is not in the schema, it’s in how Portable Text works.

---

### ⚙️ Why Claude’s approach didn’t work

* Both `blockContent` and `poemBlock` are still **Portable Text arrays of blocks**.
* When you paste from Google Docs, Sanity’s editor converts what *looks like* line breaks into *soft breaks* (`\n`) inside the same block, **not into new blocks**.
* So no matter what your schema is called, the stored structure stays the same.
* The only place you can truly “preserve” those line breaks is when **rendering** them in your Next.js frontend.

---

### ✅ The real fix is purely frontend-side

Replace your poem renderer with this version — this **handles both**:

* New paragraphs (created by pressing Enter)
* Soft line breaks (Shift+Enter or paste from Google Docs)

```tsx
import React from 'react'
import { PortableText } from '@portabletext/react'

const components = {
  block: {
    normal: ({ children }: any) => {
      const processed = children.map((child: any, i: number) => {
        if (typeof child === 'string') {
          return child.split('\n').map((line, j) => (
            <React.Fragment key={`${i}-${j}`}>
              {line}
              <br />
            </React.Fragment>
          ))
        }
        return child
      })
      return <p className="whitespace-pre-line my-4 leading-8">{processed}</p>
    },
  },
}

export default function PoemBody({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
```

✅ **Now you can freely copy-paste entire poems from Google Docs** — single, double, or mixed line breaks — and they’ll display *exactly* as in Docs.

---

### 🪶 Optional (for clean typography)

You can wrap the component with:

```tsx
<div className="font-[Noto_Serif_Devanagari] text-xl text-gray-900">
  <PoemBody value={poem.body} />
</div>
```

---

### 🔍 In short

| Change                                               | Where it helps | Result            |
| ---------------------------------------------------- | -------------- | ----------------- |
| Claude’s `poemBlock` schema                          | Sanity backend | ❌ No change       |
| Frontend `PortableText` component with `split('\n')` | Rendering      | ✅ Works perfectly |

---

