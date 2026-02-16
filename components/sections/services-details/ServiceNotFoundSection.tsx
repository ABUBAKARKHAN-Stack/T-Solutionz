"use client"
import { PageTransition } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const ServiceNotFoundSection = () => {
    return (
        <PageTransition>
            <section className="pt-32 pb-20 section-padding">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
                    <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
                    <Button asChild variant="outline" className="rounded-full">
                        <Link href="/services">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Link>
                    </Button>
                </div>
            </section>
        </PageTransition>
    )
}

export default ServiceNotFoundSection