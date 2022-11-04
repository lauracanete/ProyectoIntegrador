/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.LauraCanete.Repository;

import com.portfolio.LauraCanete.Entity.circulos;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface Rcirculos extends JpaRepository<circulos, Integer>{
    Optional<circulos> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
    
}
