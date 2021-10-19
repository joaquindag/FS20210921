package com.examples;

import java.util.regex.Pattern;

public class DNI {
	
	public boolean isDNIValid(String dni) {
		Pattern patron=Pattern.compile("[0-9]{7,8}[A-Z a-z]");
		if(!patron.matcher(dni).matches()) {
			return false;
		}
		String letterValue=dni.substring(dni.length()-1);
		String numberValue=dni.substring(0,dni.length()-1);
		return Character.toUpperCase(letterValue.charAt(0))=="TRWAGMYFPDXBNJZSQVHLCKE".charAt(Integer.parseInt(numberValue)%23);
	}

}
