"use client"

import { useState, useRef, useEffect } from "react"
import { PaintBucket, Upload, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { toast } from "sonner"

const PAINT_COLORS = [
  { name: "Pure White", hex: "#FFFFFF" },
  { name: "Soft Cream", hex: "#F5F5DC" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Mint Green", hex: "#98FF98" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Peach", hex: "#FFDAB9" },
  { name: "Light Gray", hex: "#D3D3D3" },
  { name: "Pale Yellow", hex: "#FFFFE0" },
  { name: "Rose Pink", hex: "#FFE4E1" },
  { name: "Sage Green", hex: "#BCB88A" },
]

export function ColorVisualizer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(PAINT_COLORS[0])
  const [opacity, setOpacity] = useState(0.5)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const dropZoneRef = useRef<HTMLDivElement>(null)

  const validateImage = (file: File): boolean => {
    if (!file.type.startsWith('image/')) {
      setError("Please upload an image file")
      return false
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError("Image size should be less than 5MB")
      return false
    }
    return true
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!validateImage(file)) return

    setIsProcessing(true)
    setError(null)
    const reader = new FileReader()
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string)
      setIsProcessing(false)
    }
    reader.onerror = () => {
      setError("Failed to read image file")
      setIsProcessing(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (!file) return

    if (!validateImage(file)) return

    setIsProcessing(true)
    setError(null)
    const reader = new FileReader()
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string)
      setIsProcessing(false)
    }
    reader.onerror = () => {
      setError("Failed to read image file")
      setIsProcessing(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const resetVisualizer = () => {
    setSelectedImage(null)
    setSelectedColor(PAINT_COLORS[0])
    setOpacity(0.5)
    setError(null)
  }

  const applyColor = () => {
    if (!selectedImage || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      // Set canvas size to match image
      canvas.width = img.width
      canvas.height = img.height

      // Draw original image
      ctx.drawImage(img, 0, 0)

      // Apply color overlay
      ctx.fillStyle = selectedColor.hex
      ctx.globalAlpha = opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Reset alpha
      ctx.globalAlpha = 1.0
    }
    img.src = selectedImage
  }

  const downloadImage = () => {
    if (!canvasRef.current) return

    const link = document.createElement('a')
    link.download = `wall-color-${selectedColor.name.toLowerCase().replace(/\s+/g, '-')}.png`
    link.href = canvasRef.current.toDataURL()
    link.click()
  }

  useEffect(() => {
    if (selectedImage) {
      applyColor()
    }
  }, [selectedImage, selectedColor, opacity])

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <PaintBucket className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Virtual Color Visualizer</h2>
        </div>
        {selectedImage && (
          <Button
            variant="outline"
            onClick={resetVisualizer}
            className="text-sm"
          >
            Reset
          </Button>
        )}
      </div>

      {error && (
        <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Upload Room Image</h3>
            <div
              ref={dropZoneRef}
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isProcessing ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/50'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  document.getElementById('image-upload')?.click()
                }
              }}
            >
              {!selectedImage ? (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 mx-auto text-gray-400" />
                  <div className="text-sm text-gray-500">
                    <p>Drag and drop your room image here, or</p>
                    <Button
                      variant="outline"
                      className="mt-2"
                      onClick={() => document.getElementById('image-upload')?.click()}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Browse Files'}
                    </Button>
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={isProcessing}
                  />
                </div>
              ) : (
                <div className="relative">
                  <img
                    ref={imageRef}
                    src={selectedImage}
                    alt="Uploaded room"
                    className="max-h-[300px] mx-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setSelectedImage(null)}
                    disabled={isProcessing}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Select Paint Color</h3>
            <div className="grid grid-cols-5 gap-2">
              {PAINT_COLORS.map((color) => (
                <button
                  key={color.hex}
                  className={`w-full aspect-square rounded-lg border-2 transition-all ${
                    selectedColor.hex === color.hex
                      ? 'border-primary scale-110'
                      : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color)}
                  title={color.name}
                  disabled={isProcessing}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Adjust Color Intensity</h3>
            <Slider
              value={[opacity * 100]}
              onValueChange={([value]) => setOpacity(value / 100)}
              max={100}
              step={1}
              className="w-full"
              disabled={isProcessing}
            />
            <div className="text-sm text-gray-500 text-center">
              {Math.round(opacity * 100)}% Intensity
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Preview</h3>
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            {selectedImage ? (
              <>
                <canvas
                  ref={canvasRef}
                  className="w-full h-full object-contain"
                />
                <Button
                  className="absolute bottom-4 right-4"
                  onClick={downloadImage}
                  disabled={isProcessing}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Save Image
                </Button>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                Upload an image to see the preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 