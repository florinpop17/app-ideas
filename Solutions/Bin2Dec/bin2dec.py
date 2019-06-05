
import os
import platform

binary_values = [128, 64, 32, 16, 8, 4, 2, 1]

def clear():
    if platform.system() == "Windows":
        os.system('cls')
    else:
        os.system('clear')

def header():
    clear()
    print(" _                ___       _              ")
    print(" \ ___  ` , __   /   \   ___/   ___    ___ ")
    print(" |/   \ | |'  `.   _-'  /   | .'   ` .'   `")
    print(" |    ` | |    |  /    ,'   | |----' |     ")
    print(" `___,' / /    | /___, `___,' `.___,  `._.'")
    print("                            `              ")
    print("    A Simple Binary to Decimal Converter   ")
    print("           - Solution by Paul Burkart  \n\n")
    
    convert()

def isBinary(binary):
    for i in str(binary):
        if i not in '10':
            return False
    return True
    
def fillWithZeros(binary):
    zeros = 8 - len(binary)
    new_binary = zeros * "0" + binary
    return new_binary
    
def convert():
    binary_values = [128, 64, 32, 16, 8, 4, 2, 1]
    decimal_value = 0
    iterator = 0
    
    binary = input("Please enter a binary value up to 8 digits long: ")
    
    if isBinary(binary):
        if len(binary) <= 8:
            binary = fillWithZeros(binary)
            for i in binary:
                if i == "1":
                    decimal_value += binary_values[iterator]
                iterator += 1
            print(decimal_value)
        else:
            print("Error: Value is too big. Please enter an 8 digit binary value.\n")
            convert()
    else:
        print("Error: Value isn't binary, please enter a binary value.\n")
        convert()
        
if __name__ == "__main__":
    header()