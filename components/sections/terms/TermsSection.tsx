import { ContainerLayout } from '@/components/layout'
import { AnimatedSection } from '@/components/shared'

const TermsSection = () => {
  return (
       <section className="pt-32 pb-20 section-padding">
        <ContainerLayout className="max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-medium text-accent uppercase tracking-[0.3em] mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Terms of <span className="text-accent italic">Service</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last updated: February 11, 2026</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-sm max-w-none space-y-8 text-foreground/80">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  By accessing and using the T-Solutions website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">2. Services</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  T-Solutions provides business consulting services including strategic planning, digital transformation, sustainability consulting, market research, compliance advisory, and growth acceleration. The scope of services will be defined in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">3. Intellectual Property</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  All content, logos, trademarks, and materials on this website are the property of T-Solutions and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">4. User Responsibilities</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  You agree to provide accurate information when using our contact forms or engaging our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  T-Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">6. Confidentiality</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. This obligation survives the termination of any service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">7. Termination</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We reserve the right to terminate or suspend access to our services at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">8. Governing Law</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Oregon, United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">9. Contact</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For any questions regarding these Terms of Service, please contact us at hello@t-solutions.com or +1 (555) 123-4567.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </ContainerLayout>
      </section>
  )
}

export default TermsSection