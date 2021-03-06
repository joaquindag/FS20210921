package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DNITest {
	DNI dni;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		dni=new DNI();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testIsDNIValid() {
		assertAll("DNI",
				() -> assertTrue(dni.isDNIValid("65004204V"),"Validar DNI valido"),
				() -> assertFalse(dni.isDNIValid("00000000D"),"Validar DNI no valido"),
				() -> assertThrows(Exception.class, ()->dni.isDNIValid(null),"Validar DNI null"),
				() -> assertFalse(dni.isDNIValid(""),"Validar DNI cadena vacia")
		);
		
	}
	

}
