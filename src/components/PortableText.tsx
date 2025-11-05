import { PortableText as PortableTextReact } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import type { ReactNode } from 'react'
import type { BlockContent } from '@/lib/sanity.types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

interface ImageValue {
  asset?: {
    _ref: string
  }
  alt?: string
  caption?: string
}

interface CodeValue {
  code: string
  language?: string
  filename?: string
}

const components = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ' '}
            width={800}
            height={450}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    code: ({ value }: { value: CodeValue }) => {
      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm rounded-t-lg">
              {value.filename}
            </div>
          )}
          <pre className={`bg-gray-900 text-gray-100 p-4 rounded-${value.filename ? 'b' : ''}lg overflow-x-auto`}>
            <code className={`language-${value.language || 'plaintext'}`}>
              {value.code}
            </code>
          </pre>
        </div>
      )
    },
  },
  marks: {
    link: ({ value, children }: { value?: { href: string }, children?: ReactNode }) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined
      return (
        <a href={value?.href} target={target} rel={rel} className="text-blue-600 hover:underline">
          {children}
        </a>
      )
    },
    lineBreak: () => <br />,
  },
  block: {
    h1: ({ children }: { children?: ReactNode }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: { children?: ReactNode }) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: { children?: ReactNode }) => <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>,
    h4: ({ children }: { children?: ReactNode }) => <h4 className="text-lg font-semibold mt-3 mb-2">{children}</h4>,
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">{children}</blockquote>
    ),
    normal: ({ children }: { children?: ReactNode }) => <p className="mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    number: ({ children }: { children?: ReactNode }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => <li className="mb-1">{children}</li>,
    number: ({ children }: { children?: ReactNode }) => <li className="mb-1">{children}</li>,
  },
}

interface PortableTextProps {
  value: PortableTextBlock[] | BlockContent
  className?: string
}

export default function PortableText({ value, className = '' }: PortableTextProps) {
  return (
    <div className={`prose prose-gray max-w-none ${className}`}>
      {/* @ts-expect-error - Sanity BlockContent type not fully compatible with PortableTextBlock */}
      <PortableTextReact value={value} components={components} />
    </div>
  )
}