import { Star, StarHalf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
}

export function TestimonialCard({ name, location, quote, rating }: TestimonialCardProps) {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-yellow-400" />)
    }

    return stars
  }

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex mb-4">{renderStars()}</div>
        <blockquote className="text-muted-foreground mb-6 text-pretty">"{quote}"</blockquote>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
