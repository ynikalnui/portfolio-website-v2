import Link from 'next/link'

export default function ProjectDescription({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n/g)

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        const formatParts = paragraph.split(/(\[.*?\]\(.*?\))|(\*\*.*?\*\*)/g).filter(Boolean)

        return (
          <p key={pIndex}>
            {formatParts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <span key={i} className='font-medium'>
                    {part.slice(2, -2)}
                  </span>
                )
              }

              const link = part.match(/\[(.*?)\]\((.*?)\)/)
              if (link) {
                const [_, text, url] = link // eslint-disable-line @typescript-eslint/no-unused-vars
                return (
                  <Link
                    key={i}
                    href={url}
                    className='font-semibold text-black underline transition-all hover:decoration-transparent'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {text}
                  </Link>
                )
              }

              return part
            })}
          </p>
        )
      })}
    </>
  )
}
