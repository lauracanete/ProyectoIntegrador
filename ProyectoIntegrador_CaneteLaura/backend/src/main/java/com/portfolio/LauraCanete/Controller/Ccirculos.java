/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.LauraCanete.Controller;

import com.portfolio.LauraCanete.Dto.dtoCirculos;
import com.portfolio.LauraCanete.Entity.circulos;
import com.portfolio.LauraCanete.Security.Controller.Mensaje;
import com.portfolio.LauraCanete.Service.Scirculos;

import java.util.List;
import org.apache.commons.lang3.StringUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://proyectolaura-d6df4.web.app")
//@CrossOrigin(origins = "https://proyectolaura-d6df4.web.app")
@RequestMapping("/circulos")
public class Ccirculos {

    @Autowired
    Scirculos scirculos;

    @GetMapping("/lista")
    public ResponseEntity<List<circulos>> list() {
        List<circulos> list = scirculos.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/(id)")
    public ResponseEntity<circulos> getBayId(@PathVariable("id") int id) {
        if (!scirculos.existsById(id)) {
            return new ResponseEntity(new Mensaje("no existe el ID"), HttpStatus.BAD_REQUEST);
        }
        circulos cirCulos = scirculos.getOne(id).get();
        return new ResponseEntity(cirCulos, HttpStatus.OK);
    }

    @DeleteMapping("/delete/(id)")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (scirculos.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        scirculos.delete(id);
        return new ResponseEntity(new Mensaje("SKILL eliminada"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoCirculos dtocirCulos) {
        if (StringUtils.isBlank(dtocirCulos.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        if (scirculos.existsByNombre(dtocirCulos.getNombre())) {
            return new ResponseEntity(new Mensaje("Ese SKILL ya existe"), HttpStatus.BAD_REQUEST);
        }

        circulos cirCulos = new circulos(
                dtocirCulos.getNombre(), dtocirCulos.getPorcentaje()
        );
        scirculos.save(cirCulos);
        return new ResponseEntity(new Mensaje("Educacion creada"), HttpStatus.OK);

    }

    @PutMapping("/update/(id)")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoCirculos dtocirCulos) {
        if (!scirculos.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if (scirculos.existsByNombre(dtocirCulos.getNombre()) && scirculos.getByNombre(dtocirCulos.getNombre()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtocirCulos.getNombre())) {
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }

        circulos cirCulos = scirculos.getOne(id).get();
        cirCulos.setNombre(dtocirCulos.getNombre());
        cirCulos.setPorcentaje(dtocirCulos.getPorcentaje());

        scirculos.save(cirCulos);

        return new ResponseEntity(new Mensaje("SKILL actualizada"), HttpStatus.OK);

    }

}
