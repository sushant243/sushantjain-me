Use a text field for poems instead of blockContent

If your poems are mostly plain text without rich marks (bold, italics, links, images),
you can switch from:

{ name: 'body', type: 'blockContent' }


to:

{ name: 'body', type: 'text' }


Then Sanity stores raw \n characters — no conversion needed.

On the frontend:

<p className="whitespace-pre-line">{poem.body}</p>


✅ Copy-paste from Google Docs will preserve all line breaks exactly.
❌ But you lose inline formatting, links, or block-level features.

This is often the best option for pure poetry repositories.