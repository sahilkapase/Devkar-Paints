import { ColorVisualizer } from "@/components/color-visualizer"

export default function VisualizerPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Virtual Color Visualizer
          </h1>
          <p className="text-xl text-muted-foreground">
            Try different paint colors on your room before making a decision. Upload a photo of your room and experiment with various colors to find the perfect match.
          </p>
        </div>

        <ColorVisualizer />

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">1</div>
              <h3 className="font-semibold mb-2">Upload Your Room</h3>
              <p className="text-muted-foreground">
                Take a photo of your room and upload it to our visualizer
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">2</div>
              <h3 className="font-semibold mb-2">Choose Colors</h3>
              <p className="text-muted-foreground">
                Select from our curated palette of popular paint colors
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">3</div>
              <h3 className="font-semibold mb-2">Save & Share</h3>
              <p className="text-muted-foreground">
                Download your visualization and share it with others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 