# OCR Android App

**Tier:** 2-Intermediate

Sometimes it is difficult to comprehend the text in an image.To solve this problem we are here going to build an android app which incorporates OCR.
Although it can be built cross-platform using flutter or react-native ,here we are sticking to native development to ease out the complexites and also because 
the dependencies and SDKs can be easily integrated with google android studio.

After extracting the text from image we can convert it to other languages so that people of different languages can understand this text.





The goal of the OCR-Translator app is to simplify text and make it easily understandable for people of different languages.

## User Stories


-   [ ] User is given an option to either select the image from camera storage or use camera using ML Kit provided by Firebase.
-   [ ] Once the text is extracted it will be displayed on a text field (also called text view in android).
-   [ ] We use this text and convert it to other languages using ML kit's translation API.Translation can work for upto 50 different language

### Developer Notes

One must note that it is important the the storage and internet permission are taken from the user .An example of permission here is mentioned which needs
to be added to the manifest file.
```
<manifest ... >
   <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.INTERNET" />
</manifest>
```




## Bonus features

-   [ ] User can be given an option to listen to the extract text using textTospeech function in android. 


## Useful links and resources

- [Translation ML Kit](https://developers.google.com/ml-kit/language/translation/)
- [Recognizing text in an image](https://firebase.google.com/docs/ml-kit/android/recognize-text)

## Example projects

[Here is an example of text translation](https://heartbeat.comet.ml/translate-text-with-ml-kit-on-android-a7bc636aaf98)
We just need to add the text extraction before this, which will display the text in the textview that will then be translated
