import Link from 'next/link'

interface BreadcrumbProps {
  items: {
    label: string
    href?: string
  }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
