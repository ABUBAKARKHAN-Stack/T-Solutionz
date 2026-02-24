import { CTASection } from '@/components/shared'
import React from 'react'

const ProjectCTA = () => {
  return (
  <CTASection
        title={<>Your project <span className="text-accent italic">starts here</span></>}
        description="Let's discuss your requirements and define the right approach."
      />
  )
}

export default ProjectCTA