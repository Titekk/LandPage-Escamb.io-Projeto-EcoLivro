import React from "react"
import { ShaderBackground } from "@/components/ui/shader-anima"

export default function ShaderBackgroundDemo() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <ShaderBackground className="h-full w-full" />
    </div>
  )
}
