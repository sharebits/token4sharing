# token4sharing

## HOW TO MAKE JAR FILE VIA COMMAND LINE (WINDOWS)

1. Make sure curl, java and java development kit(jdk) are installed on your machine.
2. Open command line(cmd) and navigate to the project directory.
3. Make manifest.txt file.
  Content: Main-Class: $YOUR_MAIN_JAVA_FILE.java
4. Perform following commands on command line (cmd)
	- javac $YOUR_MAIN_JAVA_FILE.java
	- jar cfm $NAME_OF_JAR.jar manifest.txt $CUSTOM_CLASS_FILE.class $ANY_JS_SCRIPTS.js
	- curl --insecure -i --header "Authorization: Bearer $ACCESS_TOKEN" --header "Content-Type:application/octet-stream" --data-binary @$PATH_TO_JAR https://$SHAREBOT_SERVER:8443/upload
