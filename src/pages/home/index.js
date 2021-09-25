import React from 'react'
import { NavbarsHome } from 'components/navbar'
import Hero from 'components/hero'
import Features from 'components/features'
import Testimonial from 'components/testimonial'
import Footer from 'components/footer'

export default function Home() {
    return (
        <>
            <header>
                <NavbarsHome />
            </header>

            <main>
                <section>
                    <Hero />
                </section>
                <section id="nosotros">
                    <Features />
                </section>
                <section id="clientes">
                    <Testimonial />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
