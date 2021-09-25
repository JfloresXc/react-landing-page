import React from 'react'
import { NavbarsHome } from '../../components/navbar'
import Footer from '../../components/footer'
import Info from 'components/info'

export default function Contact() {
    return (
        <>
            <header>
                <NavbarsHome />
            </header>
            <main>
                <section>
                    <Info />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
