# Vigenere Cipher

**Tier:** 1-Beginner

The rate and impact of security breaches in recent years makes it imperative
that developers understand the methods bad actors use to compromise apps. 
Understanding how an app can be compromised is the first step in coming up 
with effective protection measures.

One of the easiest ways bad actors can compromise an app is to access
data that's left unencrypted by the developer. There are a number of strong
encryption algorithms available to ensure that data is not readable even if
access is compromised. These include AES, Blowfish, and TripleDES to name a
few. 

However, these algorithms can be quite complex to implement so the objective
of this app is to implement a classical encryption algorithm, the Vigenere
Cipher to learn the basics of how ciphers work.

### Requirements & Constraints

- Developers should use only native language features to implement the Vigenere
Cipher. Libraries are not allowed.
- Developers should design and implement their own solution using only the
description of the steps in the Vigenere Cipher algorithm.
- After successfully implementing this algorithm Developer should ask
themselves these questions:
    - Would you feel confident encrypting your financial information using the
    Vigenere Cipher? Why?
    - How would you detect that a message had been encrypted using the
    Vigenere Cipher?
    - How would you go about trying to crack this encryption?

## User Stories

-   [ ] User can see the app window with these components:
    - Plain text message input field
    - Encryption key input field
    - Action buttons - 'Encrypt' and 'Decrypt'
    - Resulting encrypted or decrypted message
-   [ ] User can enter the text to be encrypted in the plain text message input
field
-   [ ] User can enter the Encryption key the Vigenere algorithm will use to
encrypt the plain text message.
-   [ ] User can click see see the 'Decrypt' button disabled until the plain
text has been encrypted.
-   [ ] User can click the 'Encrypt' button to encrypt the plain text message
-   [ ] User can see the encrypted message displayed in the result field.
-   [ ] User can see the 'Decrypt' button enabled after the encrypted message
has been displayed.
-   [ ] User can click the 'Decrypt' button to decrypt the encrypted message
and to display its contents in the result field.

## Bonus features

-   [ ] User can see a 'Compare' button after decryption that compares the 
original plain text message with the decrypted message
-   [ ] User can see an error message if the 'Compare' detects differences
in the contents of these two fields.

## Useful links and resources

- [Bad Actors](http://solutionsreservoir.com/resources/introduction-to-cybersecurity/part-1-cybersecurity-overview)
- [Vigenere Cypher](https://www.geeksforgeeks.org/vigenere-cipher/)

## Example projects

[Vigenere Encryption](https://codepen.io/max1128/pen/VdyJmd)
