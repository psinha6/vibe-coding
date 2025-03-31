"use client"

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  language?: string
  value: string
}

export default function CodeBlock({ language, value }: CodeBlockProps) {
  return (
    <div className="my-6 rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language || 'javascript'}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          borderRadius: '0.5rem',
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
} 