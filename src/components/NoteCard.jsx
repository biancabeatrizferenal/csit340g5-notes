import { useState } from 'react'

function NoteCard({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      {isExpanded && <p className="mb-3 text-[#555]">{body}</p>}
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