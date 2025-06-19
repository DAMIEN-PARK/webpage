'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { ReactNode } from 'react'

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle: string
  description: string
  icon: ReactNode
  details: {
    title: string
    content: string | ReactNode
    type?: 'text' | 'image' | 'video' | 'link'
    src?: string
    alt?: string
    url?: string
  }[]
}

export default function DetailModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  icon,
  details
}: DetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-fractal-500 to-data-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {title}
                  </h2>
                  <p className="text-fractal-600 dark:text-fractal-400 font-medium">
                    {subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="space-y-6">
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      {detail.title}
                    </h3>
                    
                    {detail.type === 'image' && detail.src && (
                      <div className="mb-4">
                        <img
                          src={detail.src}
                          alt={detail.alt || detail.title}
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    )}
                    
                    {detail.type === 'video' && detail.src && (
                      <div className="mb-4">
                        <video
                          src={detail.src}
                          controls
                          className="w-full rounded-lg shadow-md"
                          preload="metadata"
                        />
                      </div>
                    )}
                    
                    {detail.type === 'link' && detail.url && (
                      <div className="mb-4">
                        <a
                          href={detail.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-fractal-600 dark:text-fractal-400 hover:text-fractal-700 dark:hover:text-fractal-300 transition-colors"
                        >
                          <span>{detail.content}</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    )}
                    
                    {detail.type === 'text' || !detail.type ? (
                      <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {detail.content}
                      </div>
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 