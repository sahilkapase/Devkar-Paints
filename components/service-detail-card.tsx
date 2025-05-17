import Image from "next/image"
import { CheckCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface ServiceDetailCardProps {
  title: string
  description: string
  features: string[]
  image: string
  className?: string
}

export function ServiceDetailCard({ title, description, features, image, className }: ServiceDetailCardProps) {
  return (
    <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-lg ${className || ''}`}>
      <div className="relative aspect-video">
        <Image src={image || "13.jpg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 text-pretty">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
