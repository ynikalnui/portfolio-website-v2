import Link from "next/link"

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
                return <span key={i} className="font-medium">{part.slice(2, -2)}</span>
              }
              
              const link = part.match(/\[(.*?)\]\((.*?)\)/)
              if (link) {
                const [_, text, url] = link
                return (
                  <Link 
                    key={i}
                    href={url}
                    className="text-black underline hover:decoration-transparent transition-all font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
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