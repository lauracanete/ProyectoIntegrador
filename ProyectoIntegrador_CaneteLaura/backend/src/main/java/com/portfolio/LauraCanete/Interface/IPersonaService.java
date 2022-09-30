package com.portfolio.LauraCanete.Interface;

import com.portfolio.LauraCanete.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto tipo persona
    public void savePersona(Persona persona);
    
    
    //Eliminar un objeto de tipo persona
    public void deletePersona(Long id);
    
    //buscar un objeto tipo perona
    public Persona findPersona(Long id);
    
}
