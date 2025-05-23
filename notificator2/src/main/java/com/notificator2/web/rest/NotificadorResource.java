package com.notificator2.web.rest;

import com.notificator2.web.rest.dto.NotificadorDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api")
public class NotificadorResource {

    @PostMapping("/notificador")
    public ResponseEntity<NotificadorDTO> create(@Valid @RequestBody NotificadorDTO notificadorDTO) {
        // Por ahora solo devolvemos 201 Created sin implementar la lógica
        return ResponseEntity.created(URI.create("/api/notificador")).body(notificadorDTO);
    }
}
