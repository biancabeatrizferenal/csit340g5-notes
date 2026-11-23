
import { useState, useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { largeText } = useContext(SettingsContext)

  return (
    <div>
      <h3
        className={
          largeText
            ? 'mb-2 text-[28px] font-medium'
            : 'mb-2 text-xl font-medium'
        }
      >
        {title}
      </h3>

      {isExpanded && (
        <p
          className={
            largeText
              ? 'mb-3 text-[21px] text-[#555]'
              : 'mb-3 text-[#555]'
          }
        >
          {body}
        </p>
      )}

      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="cursor-pointer text-sm text-[#b83f45] hover:underline"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard
