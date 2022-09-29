package com.portfolio.LauraCanete.Repository;

import com.portfolio.LauraCanete.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPersonaRepository extends JpaRepository<Persona,Long>{
    
}
