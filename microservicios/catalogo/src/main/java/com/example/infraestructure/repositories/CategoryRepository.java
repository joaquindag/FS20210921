package com.example.infraestructure.repositories;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.domains.entities.dtos.ActorShort;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	List<Category> findByFirstNameStartingWithOrderByLastNameDesc(String prefijo);
	List<Category> findByLastUpdateGreaterThan(LocalDate fecha);
	
//	List<ActorDTO> findByActorIdNotNull();
//	List<ActorShort> findByActorIdNotNull();
	<T> List<T> findByCategoryIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByCategoryIdIsNotNull(Sort sort, Class<T> type);
//	<T> Page<T> findByCategoryIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("FROM Category a WHERE a.lastUpdate > ?1")
	List<Category> laMia(Date fecha);
}
