'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = 'python', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
          <span className="text-sm font-medium text-slate-300">{title}</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-2 text-slate-400 hover:text-slate-200 transition-colors"
          >
            {copied ? (
              <>
                <Check size={16} />
                <span className="text-xs">복사됨!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span className="text-xs">복사</span>
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-green-400 font-mono text-sm leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  )
} 