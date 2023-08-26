import pyfiglet
import colorama
import re

MORSE_CODE_DICT = {'A':'.-', 'B':'-...',
                    'C':'-.-.', 'D':'-..', 'E':'.',
                    'F':'..-.', 'G':'--.', 'H':'....',
                    'I':'..', 'J':'.---', 'K':'-.-',
                    'L':'.-..', 'M':'--', 'N':'-.',
                    'O':'---', 'P':'.--.', 'Q':'--.-',
                    'R':'.-.', 'S':'...', 'T':'-',
                    'U':'..-', 'V':'...-', 'W':'.--',
                    'X':'-..-', 'Y':'-.--', 'Z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-'}

PREG_MATCH = "[a-z0-9,=*_&^%$#@!<>""'`~]"
BINARY_PREG_MATCH = "[a-z2-9,=*_&^%$#@!<>""'`~]"
MORSE_PREG_MATCH = "[,=*_&^%$#@!<>""'`~]"


def en_to_morse(text):
    cipher = ""
    for letter in text:
        if letter != " ":
            cipher += MORSE_CODE_DICT[letter] + " "
        else:
            cipher += " "
    return cipher

def morse_to_en(text):
    text += " "
    decipher = ""
    citext = ""
    for letter in text:
        if letter != " ":
            i = 0
            citext += letter
        else:
            i += 1
            if i == 2:
                decipher += " "
            else:
                decipher += list(MORSE_CODE_DICT.keys())[list(MORSE_CODE_DICT.values()).index(citext)]
                citext = ""
    return decipher

# TITLE
ascii_text = colorama.Fore.GREEN + \
    pyfiglet.figlet_format("Binary Morse Text Translator")

info = colorama.Fore.YELLOW + "If input is empty, press 'Enter' to exit"

print(ascii_text)
print(info)
print(colorama.Fore.RESET)

question = input(
    "What would you like to translate, binary to english (binary), english to binary (english), or morse code? ")

# ENGLISH TO BINARY
if re.match("english", question):
    en = input("English: ")
    if (en == ""):
        print("Nothing inputed, restarting...")
    else:
     binary = " ".join(format(ord(c), "b") for c in en)
     ones = binary.count("1")
     zeros = binary.count("0")
     answer = colorama.Fore.GREEN + binary
    
     print(answer)
     print(f"Ones: {ones}")
     print(f"Zeros: {zeros}")
     print(f"{ones + zeros} characters overall")

# BINARY TO ENGLISH
if re.match("binary", question):
    binary = input("Binary: ")
    if re.match(BINARY_PREG_MATCH, binary):
        ERR = colorama.Fore.RED + "You cannot input letters, numbers from 2-9, or any characters when trying to translate binary!"
        print(ERR)
        print(colorama.Fore.RESET)
    elif (binary == ""):
        print("Nothing inputed, restarting...")
    else:
     en = "".join(chr(int(c, 2)) for c in binary.split(" "))
     answer = colorama.Fore.GREEN + en
     print(answer)

if re.match("morse code", question):
    morse_question = input("Morse to English (me), or English to Morse (em)? ")
    # MORSE TO ENGLISH
    if re.match("me", morse_question):
        morse_text = input("Morse Code: ")
        if re.match(PREG_MATCH, morse_text):
            ERR = colorama.Fore.RED + "You cannot input letters, numbers, or any characters when trying to translate morse code!"
            print(ERR)
            print(colorama.Fore.RESET)
        elif (morse_text == ""):
         print("Nothing inputed, restarting...")
        else:
         en = morse_to_en(morse_text)
         answer = colorama.Fore.GREEN + en
         print(answer)

    # ENGLISH TO MORSE
    if re.match("em", morse_question):
        FYI = colorama.Fore.YELLOW + "Please capitalize every text!"
        print(FYI)
        print(colorama.Fore.RESET)

        en = input("English: ")
        if re.match(MORSE_PREG_MATCH, en):
            ERR = colorama.Fore.RED + "Cannot input any characters when trying to translate to morse code. They're not compatible!"
            print(ERR)
            print(colorama.Fore.RESET)
        elif (en == ""):
         print("Nothing inputed, restarting...")
        else:
         morse_text = en_to_morse(en.upper())
         dots = morse_text.count(".")
         dashes = morse_text.count("-")
         answer = colorama.Fore.GREEN + morse_text

         print(answer)
         print(f"Dots: {dots}")
         print(f"Dashes: {dashes}")
         print(f"{dots + dashes} characters overall")

print(colorama.Fore.RESET)
