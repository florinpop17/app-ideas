/**
 * 
 */
import java.util.*;
import java.lang.Math;
/**
 * @author safouene
 *
 */
public class bin2dec {

	/**
	 * @param args
	 */
	public static boolean arrondi(String s) {
		boolean b = true;
		for (int i = 0; i < s.length(); i++) {
			if(s.charAt(i) != '0' && s.charAt(i) != '1') { return false;}
		}
		return true;
	}

	public static void main(String[] args) {
		System.out.println("Type a binary number");
        Scanner sc = new Scanner(System.in);
        String binNumber = sc.nextLine();
        while (!arrondi( binNumber )) {
        	System.out.println("Error, type again");
        	binNumber = sc.nextLine();
        	}
        int decNumber = 0;
        int l = binNumber.length();
        for (int i = 0; i < l; i++) {
        	decNumber += Character.getNumericValue(binNumber.charAt(i)) *Math.pow(2, l-i);
        }
        System.out.print(decNumber);
	}

}
