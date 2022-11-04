/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.LauraCanete.Service;

import com.portfolio.LauraCanete.Entity.circulos;
import com.portfolio.LauraCanete.Repository.Rcirculos;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class Scirculos {
    @Autowired
    Rcirculos rcirculos;
    
    public List<circulos> list(){
        return rcirculos.findAll();
    
    }
    
    public Optional<circulos> getOne(int id){
        return rcirculos.findById(id);
    
    }
    
    public Optional<circulos> getByNombre(String nombre){
        return rcirculos.findByNombre(nombre);
    }
    
    public void save(circulos skill){
        rcirculos.save(skill);
    }
    public void delete(int id){
        rcirculos.deleteById(id);
    
    }
    public boolean existsById(int id){
        return rcirculos.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return rcirculos.existsByNombre(nombre);
    
    }
    
}
