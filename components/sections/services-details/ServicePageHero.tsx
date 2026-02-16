import { PageHero } from '@/components/shared'
import { APP_NAME } from '@/constants/app.constants'
import { getIconByName } from '@/lib/icon-mapper';
import { IImage } from '@/types/shared.types';
import { Star } from 'lucide-react';

type Props = {
    serviceTitle: string;
    serviceDescription: string;
    image: IImage;
    icon: string;
    isFeatured: boolean

}

const ServicePageHero = ({
    image,
    serviceDescription,
    serviceTitle,
    icon,
    isFeatured
}: Props) => {
    const Icon = getIconByName(icon)
    return (
        <PageHero
            eyebrow={`${APP_NAME} Service`}
            title={serviceTitle}
            description={serviceDescription}
            backgroundImage={image}
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: serviceTitle },
            ]}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                </div>
                {isFeatured && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                        <Star className="h-3 w-3 fill-accent" /> Featured Service
                    </span>
                )}
            </div>
        </PageHero>

    )
}

export default ServicePageHero