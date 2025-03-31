"use client"

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

export default function SafeImage(props: ImageProps) {
  const [error, setError] = useState(false)
  
  // Generate placeholder color based on src string
  const generatePlaceholderColor = () => {
    // Simple hash function to generate a consistent color for the same src
    let hash = 0
    if (typeof props.src === 'string') {
      for (let i = 0; i < props.src.length; i++) {
        hash = props.src.charCodeAt(i) + ((hash << 5) - hash)
      }
    }
    
    const h = hash % 360
    return `hsl(${h}, 70%, 80%)`
  }
  
  if (error) {
    return (
      <div 
        style={{ 
          position: 'relative',
          width: '100%', 
          height: '100%', 
          backgroundColor: generatePlaceholderColor(),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#333',
          fontSize: props.fill ? '1.5rem' : '1rem',
          fontWeight: 'bold',
        }}
      >
        {typeof props.alt === 'string' ? props.alt.charAt(0).toUpperCase() : 'Image'}
      </div>
    )
  }
  
  return (
    <Image
      {...props}
      onError={() => setError(true)}
      alt={props.alt || 'Image'}
    />
  )
} 