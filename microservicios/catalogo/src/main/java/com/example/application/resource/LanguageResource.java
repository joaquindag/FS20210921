package com.example.application.resource;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.domains.contracts.services.LanguageService;
import com.example.domains.entities.Language;
import com.example.exceptions.NotFoundException;

import org.springframework.http.HttpStatus;

@RestController
@RequestMapping(path = "/lenguajes")
public class LanguageResource {
	@Autowired
	LanguageService srv;
	
	@GetMapping
	public List<Language> getAll(@RequestParam(required = false) String sort) {
		if(sort== null)
			return srv.getAll();
		else
			return (List<Language>) srv.getAll();
	}

	@GetMapping(path = "/{id}")
	public Language getOne(@PathVariable int id) throws NotFoundException {
		var language = srv.getOne(id);
		if(language.isEmpty())
			throw new NotFoundException();
		else
			return language.get();
	}
	
//	@GetMapping(path = "/{id}/peliculas")
//	@Transactional
//	public List<FilmShort> getPelis(@PathVariable int id) throws NotFoundException {
//		var actor = srv.getOne(id);
//		if(actor.isEmpty())
//			throw new NotFoundException();
//		else {
//			return (List<FilmShort>) actor.get().getFilmActors().stream().map(item -> FilmShort.from(item)).collect(Collectors.toList());
//		}
//	}
	
//	@PostMapping
//	public ResponseEntity<Object> create(@Valid @RequestBody ActorDTO item) throws BadRequestException, DuplicateKeyException, InvalidDataException {
//		if(item == null)
//			throw new BadRequestException("Faltan los datos");
//		var newItem = srv.add(ActorDTO.from(item));
//		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
//			.buildAndExpand(newItem.getActorId()).toUri();
//		return ResponseEntity.created(location).build();
//
//	}

//	@PutMapping("/{id}")
//	//@ResponseStatus(HttpStatus.NO_CONTENT)
//	public ActorDTO update(@PathVariable int id, @Valid @RequestBody ActorDTO item) throws BadRequestException, NotFoundException, InvalidDataException {
//		if(item == null)
//			throw new BadRequestException("Faltan los datos");
//		if(id != item.getActorId())
//			throw new BadRequestException("No coinciden los identificadores");
//		return ActorDTO.from(srv.modify(ActorDTO.from(item)));	
//	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) {
		srv.deleteById(id);
	}

}
