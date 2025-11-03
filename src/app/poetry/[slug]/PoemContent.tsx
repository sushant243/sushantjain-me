'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface PoemContentProps {
  body: string | null
  transliteration?: string | null
  translation?: string | null
}

export default function PoemContent({ body, transliteration, translation }: PoemContentProps) {
  const [showTransliteration, setShowTransliteration] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)

  if (!body) {
    return <div className="text-center text-gray-500">Poem content not available</div>
  }

  return (
    <>
      {/* Poem Body */}
      <div className="mb-8">
        <p className="whitespace-pre-line text-lg leading-loose font-hindi text-center">
          {body}
        </p>
      </div>

      {/* Transliteration Toggle */}
      {transliteration && (
        <div className="mb-6">
          <button
            onClick={() => setShowTransliteration(!showTransliteration)}
            className="flex items-center gap-2 w-full p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg font-semibold">Transliteration</span>
            {showTransliteration ? (
              <ChevronUp className="w-5 h-5 ml-auto" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-auto" />
            )}
          </button>
          {showTransliteration && (
            <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="whitespace-pre-line text-lg leading-loose italic text-center">
                {transliteration}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Translation Toggle */}
      {translation && (
        <div className="mb-6">
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center gap-2 w-full p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg font-semibold">English Translation</span>
            {showTranslation ? (
              <ChevronUp className="w-5 h-5 ml-auto" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-auto" />
            )}
          </button>
          {showTranslation && (
            <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="whitespace-pre-line text-lg leading-loose text-center">
                {translation}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}
