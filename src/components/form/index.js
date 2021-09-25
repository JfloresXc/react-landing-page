import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'wouter'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useUser } from 'hooks/useUser'

import { Input, TextArea } from 'components/input'
import { ButtonSubmit } from 'components/button'

import './form.css'

const MySwal = withReactContent(Swal)

export function FormLogin({
    title = "Not title"
}) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()
    const { login } = useUser()
    const [, setLocation] = useLocation()

    const submitEvent = async ({ username, password } = {}) => {
        const isExist = await login({ username, password })

        if (!isExist) {
            MySwal.fire({
                title: "Credenciales incorrectas",
                icon: "error",
                showConfirmButton: false,
                timer: 2000,
                padding: '3em'
            })
        } else setLocation('/alumno/menu')
    }

    return (
        <div id="form__wrap-login">
            <h2 className="form__title">{title}</h2>
            <form className="form" onSubmit={handleSubmit(submitEvent)}>
                <Input
                    errors={errors}
                    name="username"
                    placeholder="Ingresa tu username"
                    register={register}
                    style='light'
                />
                <Input
                    errors={errors}
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    register={register}
                    type="password"
                    style='light'
                />
                <div className="form__button-submit">
                    <ButtonSubmit
                        message="Iniciar sesión"
                        type="purple"
                    />
                </div>
            </form>
            <Link to="/" className="form__question">¿ Olvidaste tu contraseña ?</Link>
            {/* {loading && 'Cargando ...'} */}
        </div>
    )
}

export function FormContact({
    title = "Contacto"
}) {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm()

    const submitEvent = data => {
        MySwal.fire({
            title: "Enviado satisfactoriamente",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            padding: '5em'
        })
        reset()
    }

    return (
        <div id="form__wrap-contact">
            <div className="contact-form__title">{title}</div>
            <form className="form" onSubmit={handleSubmit(submitEvent)}>
                <Input
                    name="nombres"
                    placeholder="Ingresa tu nombre"
                    errors={errors}
                    register={register}
                />
                <Input
                    name="correo"
                    placeholder="Ingresa tu correo"
                    errors={errors}
                    register={register}
                />
                <TextArea
                    name="mensaje"
                    placeholder="Ingresa un mensaje"
                    errors={errors}
                    register={register}
                />
                <div className="form__button-submit">
                    <ButtonSubmit
                        message="Enviar"
                        type="purple"
                    />
                </div>
            </form>
        </div>
    )
}
