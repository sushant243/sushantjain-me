import Link from 'next/link'
import {
  BookOpen,
  PenTool,
  Heart,
  FileText,
  Video,
  Download,
  Compass
} from 'lucide-react'

const exploreItems = [
  {
    title: 'Start Here',
    description: 'Overview of the site',
    href: '/start-here',
    icon: Compass,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'Video Course',
    description: 'Life Mastery with Sushant Jain',
    href: '/video-course',
    icon: Video,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    title: 'Free Book',
    description: 'Transform Your Career',
    href: '/TYC-book',
    icon: Download,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    title: 'Poetry',
    description: 'Ghazals & Poems in Hindi',
    href: '/poetry',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    title: 'Short Stories',
    description: 'Stories in Hindi',
    href: '/stories',
    icon: BookOpen,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    title: 'Public Journal',
    description: 'Build in public',
    href: '/journal',
    icon: PenTool,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    title: 'All Essays & Posts',
    description: 'Long-form writing',
    href: '/essays',
    icon: FileText,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20'
  }
]

export default function ExploreGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {exploreItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group relative rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <div className={`inline-flex p-3 rounded-lg ${item.bgColor} mb-4`}>
              <Icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.description}
            </p>
            <div className="absolute inset-0 rounded-lg ring-2 ring-blue-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </Link>
        )
      })}
    </div>
  )
}