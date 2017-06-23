Vue2ExternalModules
------------------------------------------------------------------------------
Shows how to use Wijmo for Vue 2 external modules with WebPack 2 and SystemJS.

Installation
=============
- Make sure that "wijmo" key in "dependencies" of package.json references Wijmo npm image
  you want to use. To make your setup functional for both WebPack 2 and SystemJS, you should
  use modules in CommonJS or AMD formats. The modules in System format can be used with
  SystemJS only.
- Run "npm install" in the sample's root folder.

Building and Running in NodeJS
===============================
WebPack 2
---------
Execute
npm run start-webpack
command in the sample's root folder. 
The command will create a WebPack bundle in the 'dist' folder and run it
using the wpbundle.html page in your default browser.

SystemJS
--------
Execute
npm run start-systemjs
command in the sample's root folder. 
The command will compile application .ts files and run 
the default.htm page in your default browser.

Building and Running in Visual Studio
=====================================
WebPack 2
---------
- Execute
npm run build
command in the NodeJS command prompt in the sample's root folder. 
The command will create a WebPack bundle in the 'dist' folder.
- Set wpbundle.html as a default application page, and press F5 to
run the application.

SystemJS
--------
Set default.htm as a default application page, and press F5 to
run the application.
