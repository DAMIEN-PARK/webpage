'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

interface FractalCardProps {
  title: string
  subtitle: string
  description: string
  icon: ReactNode
  delay?: number
  children?: ReactNode
  media?: {
    type: 'image' | 'video'
    src: string
    alt?: string
    caption?: string
  }
  onClick?: () => void
  hasDetails?: boolean
}

export default function FractalCard({ 
  title, 
  subtitle, 
  description, 
  icon, 
  delay = 0,
  children,
  media,
  onClick,
  hasDetails = false
}: FractalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`fractal-card p-6 md:p-8 ${hasDetails ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Content Section */}
        <div className="flex items-start space-x-4 flex-1">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-fractal-500 to-data-500 rounded-xl flex items-center justify-center text-white shadow-lg">
              {icon}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {title}
              </h3>
              {hasDetails && (
                <ChevronRight size={20} className="text-fractal-500 flex-shrink-0" />
              )}
            </div>
            <p className="text-sm font-medium text-fractal-600 dark:text-fractal-400 mb-3">
              {subtitle}
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {description}
            </p>
            
            {children && (
              <div className="mt-6">
                {children}
              </div>
            )}
          </div>
        </div>

        {/* Media Section */}
        {media && (
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              {media.type === 'image' ? (
                <div className="relative">
                  <img 
                    src={media.src} 
                    alt={media.alt || title}
                    className="w-full h-48 object-cover"
                  />
                  {media.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                      {media.caption}
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <video 
                    src={media.src}
                    className="w-full h-48 object-cover"
                    controls
                    preload="metadata"
                  />
                  {media.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                      {media.caption}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
} 