import {
  PaintBucket,
  Home,
  Palette,
  FolderCogIcon as Cabinet,
  Wallpaper,
  Paintbrush,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "paint-bucket":
        return PaintBucket
      case "home":
        return Home
      case "palette":
        return Palette
      case "cabinet":
        return Cabinet
      case "wallpaper":
        return Wallpaper
      case "color-swatch":
        return Paintbrush
      default:
        return PaintBucket
    }
  }

  const Icon = getIcon()

  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6 pt-8">
        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="px-0 text-primary">
          <Link href="/services">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
