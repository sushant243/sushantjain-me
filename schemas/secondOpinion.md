Perfect — thanks for sharing the schema.
Here’s exactly what’s happening and how to fix your **line-break rendering issue** for poems stored as `blockContent`.

---

## 🧩 What’s happening

In your setup:

* `body` is of type **`blockContent`**, i.e. **Portable Text** — not a simple `text` field.
* Portable Text **does preserve line breaks**, but only as **new paragraph blocks** (not inline `\n`).
* So when you hit “Enter” once in Sanity, it creates a new paragraph (`<p>`).
  But if you hit “Shift + Enter”, it adds a soft line break (`\n`) **inside the same paragraph** — and by default, Portable Text renderers collapse those.

That’s why your **backend stores it fine**, but the **frontend shows everything tightly packed** (like image 2).

---

## ✅ The correct rendering solution

You should render the poem’s body like this in your frontend (Next.js/React):

```tsx
import { PortableText } from '@portabletext/react'

const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="whitespace-pre-line leading-relaxed text-lg">
        {children}
      </p>
    ),
  },
}

export default function PoemBody({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
```

### 🔍 What this does:

* `@portabletext/react` safely renders Sanity’s `blockContent`.
* The `whitespace-pre-line` CSS ensures that **soft line breaks (`Shift + Enter`)** inside a stanza are preserved.
* Each paragraph/stanza remains visually distinct.
* Works beautifully for poetry and ghazals — no need for HTML hacks.

---

## 🪶 Bonus: Optional poetry styling

You can make it more elegant for poems:

```tsx
<p className="whitespace-pre-line my-4 leading-8 font-[500] text-xl text-gray-800 font-[Noto_Serif_Devanagari]">
  {children}
</p>
```

That gives:

* Natural stanza spacing
* Clean Devanagari rendering
* Line breaks exactly as you typed them in Sanity

---

## ⚙️ Summary

| Problem                                        | Reason                                         | Fix                                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| Poem looks compressed (no visible line breaks) | Portable Text ignores soft line breaks in HTML | Use `@portabletext/react` with `whitespace-pre-line` style |

---

Would you like me to show you the **exact Next.js component code** for your poem page (with title, date, author, and body nicely formatted like your screenshot but with proper line breaks)?
