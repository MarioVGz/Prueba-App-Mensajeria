package com.notificator2.web.rest.dto;

import jakarta.validation.constraints.NotNull;

public class NotificadorDTO {

    private String numero;

    private String correo;

    @NotNull(message = "El contenido no puede ser nulo")
    private String contenido;

    // Getters and Setters
    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }
}
