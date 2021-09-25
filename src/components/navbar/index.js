import React, { useRef } from 'react'
import { Link } from 'wouter'
import { getLink } from 'libs'
import { ButtonClick, ButtonLink } from 'components/button'
import ListIcons from '../list-icons'
import Logo from '../logo'

import './navbar.css'

const useNav = () => {
    const navbarRef = useRef(null)
    const iconRef = useRef(null)

    const handleChange = e => {
        const { checked } = e.target
        if (checked) {
            navbarRef.current.classList.add('navbar__list-down-visible')
            iconRef.current.classList.remove('fa-bars')
            iconRef.current.classList.add('fa-times')
        }
        else {
            navbarRef.current.classList.remove('navbar__list-down-visible')
            iconRef.current.classList.remove('fa-times')
            iconRef.current.classList.add('fa-bars')
        }
    }

    return {
        navbarRef,
        iconRef,
        handleChange
    }
}

function ListLinks({ links, reference }) {
    return <ul className="navbar__list-down" ref={reference}>
        {links.map((e, index) => <li className="navbar__list-item" key={index}>
            <Link
                className="navbar__link"
                to={`/${e}`}
            >{getLink(e)}</Link>
        </li>)}
    </ul>
}

function IconResponsive({ type, handleChange, iconRef }) {
    return <>
        <input
            type="checkbox"
            id={`checkbox-${type}`}
            className="navbar__checkbox-hide"
            onChange={handleChange}
        />
        <label htmlFor={`checkbox-${type}`} className="navbar__label-hide">
            <i className="fas fa-bars" ref={iconRef}></i>
        </label>
    </>
}

export function NavbarGray() {
    const { iconRef, navbarRef, handleChange } = useNav()
    const links = ['login', 'signup']

    return (
        <nav className="navbar navbar-gray">
            <ListLinks links={links} reference={navbarRef} />
            <div className="navbar__list-up">
                <IconResponsive
                    type='gray'
                    handleChange={handleChange}
                    iconRef={iconRef}
                />
                <ListIcons />
            </div>
        </nav>
    )
}

export function NavbarSign() {
    const { iconRef, navbarRef, handleChange } = useNav()

    return (
        <nav className="navbar navbar-gray">
            <ul className="navbar__list-down" ref={navbarRef}>
                <ButtonLink
                    message="Login"
                    root="/alumno/login"
                    type="gray"
                />
                <ButtonLink
                    message="Sign Up"
                    root="/alumno/signup"
                    type="purple"
                />
            </ul>
            <div className="navbar__list-up">
                <IconResponsive
                    type='gray'
                    handleChange={handleChange}
                    iconRef={iconRef}
                />
                <ListIcons />
            </div>
        </nav>
    )
}

export function NavbarLight() {
    const { iconRef, navbarRef, handleChange } = useNav()
    const links = ['contacto']
    return (
        <nav className="navbar navbar-light">
            <div className="navbar__list-up">
                <div className="navbar__brand">
                    <Logo className="navbar__logo" />
                    <Link to="/" className="navbar__link navbar__link-brand">CENTRO IDIOMAS</Link>
                </div>
                <IconResponsive
                    type='light'
                    handleChange={handleChange}
                    iconRef={iconRef}
                />
            </div>
            <ListLinks links={links} reference={navbarRef} />
        </nav>
    )
}

export function NavbarMenu({ handleClick }) {
    return (
        <nav className="navbar navbar-gray">
            <div className="navbar__list-up">
                <ButtonClick
                    message="Cerrar sesión"
                    type='purple'
                    handleClick={handleClick}
                />
            </div>
        </nav>
    )
}

export function NavbarsHome() {
    return (
        <>
            <NavbarSign />
            <NavbarLight />
        </>
    )
}