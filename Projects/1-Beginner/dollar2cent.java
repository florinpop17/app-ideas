import java.util.Scanner;

/**
 * 
 */

/**
 * @author safouene
 *
 */
public class dollar2cent {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("Type number");
        Scanner sc = new Scanner(System.in);
        float number = sc.nextFloat();
        number *= 100;
        int cents = (int)number;
        
        int quarter = cents / 25;
        cents-= quarter*25;
        int dimes = cents / 10;
        cents-= dimes*10;
        int nickel  = cents / 5;
        cents-= nickel*5 ;
        int pennies = cents / 1;
        System.out.println((int)number + "cents : " +quarter + " quarters , " + dimes + " dimes , " + nickel + " nickel and " + pennies + " pennies");
	}

}
