import { ContainerLayout } from '@/components/layout'
import { AnimatedSection } from '@/components/shared'
import React from 'react'

const PrivacySection = () => {
    return (
        <section className="pt-32 pb-20 section-padding">
            <ContainerLayout className="max-w-3xl">
                <AnimatedSection>
                    <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Privacy <span className="text-accent italic">Policy</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mb-12">Last updated: February 11, 2026</p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="prose prose-sm max-w-none space-y-8 text-foreground/80">
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, company name, and any message content you provide.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                We use the information we collect to respond to your inquiries, provide our consulting services, send relevant communications, improve our website and services, and comply with legal obligations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Information Sharing</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to provide our services, comply with the law, or protect our rights. Trusted third-party service providers who assist us in operating our website are bound by confidentiality agreements.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Data Security</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                We implement industry-standard security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Cookies & Tracking</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at hello@t-solutions.com.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact Us</h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                If you have any questions about this Privacy Policy, please contact us at hello@t-solutions.com or +1 (555) 123-4567.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </ContainerLayout>
        </section>
    )
}

export default PrivacySection