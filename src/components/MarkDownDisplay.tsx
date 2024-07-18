import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'
import './markdownStyles.css'
  
export default function MarkDownDisplay({ markdown }: { markdown: any }) {
  return (
    <div className="markdown-body">
      <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} className="p-4">
        {markdown}
      </Markdown>
    </div>
  )
}

