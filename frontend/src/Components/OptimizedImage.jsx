import React from 'react'

/**
 * OptimizedImage
 * - Adds sensible defaults for fast-loading images.
 * - Uses native lazy-loading for non-critical images.
 * - Allows marking LCP images as priority (eager + high fetchpriority).
 *
 * Props:
 * - src: string | imported asset
 * - alt: string (required for accessibility)
 * - className: string
 * - width, height: numbers (intrinsic size to reduce CLS if known)
 * - priority: boolean (LCP/above the fold image)
 * - sizes: string (responsive sizes attribute)
 * - ...rest: any other img props
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes,
  ...rest
}) => {
  const loading = priority ? 'eager' : 'lazy'
  const fetchpriority = priority ? 'high' : 'auto'

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      fetchpriority={fetchpriority}
      width={width}
      height={height}
      sizes={sizes}
      {...rest}
    />
  )
}

export default OptimizedImage
