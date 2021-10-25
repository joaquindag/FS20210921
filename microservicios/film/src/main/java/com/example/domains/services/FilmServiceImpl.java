package com.example.domains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domains.contracts.services.FilmService;
import com.example.domains.entities.Film;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;
import com.example.infraestructure.repositories.FilmRepository;

@Service
public class FilmServiceImpl implements FilmService {
	@Autowired
	private FilmRepository dao;
	
	@Override
	public List<Film> getAll() {
		return dao.findAll();
	}

	@Override
	public Optional<Film> getOne(Integer id) {
		return dao.findById(id);
	}

	@Override
	public Film add(Film item) throws DuplicateKeyException, InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		if(item.isInvalid())
			throw new InvalidDataException(item.getErroString());
		if(getOne(item.getFilmId()).isPresent())
			throw new DuplicateKeyException();
		return dao.save(item);
	}

	@Override
	public Film modify(Film item) throws NotFoundException, InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		if(item.isInvalid())
			throw new InvalidDataException(item.getErroString());
		if(getOne(item.getFilmId()).isEmpty())
			throw new NotFoundException();
		return dao.save(item);
	}

	@Override
	public void deleteById(Integer id) {
		dao.deleteById(id);
	}

	@Override
	public void delete(Film item) throws InvalidDataException {
		if(item == null)
			throw new InvalidDataException("Faltan los datos");
		deleteById(item.getFilmId());
	}

}
