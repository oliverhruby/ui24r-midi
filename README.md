# MIDI Controller for Soundcraft Ui24R
The aim of this project is to create a MIDI controller for [Soundcraft Ui24R](https://www.soundcraft.com/en/products/ui24r) mixing console. It doesn't currently support MIDI control. The controller would connect with a MIDI device (control surface) and translate the messages from the MIDI device into native commands that can control the console.

## Current Status
The project is currently in the *ALPHA* phase, the application skeleton is being prepared.

## Goals
* Connect to console using IP or address
* Find existing MIDI devices, select one and connect
* Persist the setting after closing the application
* Allow mapping incoming MIDI commands to native commands for the console
* Allow listening to the console parameters and map them to outgoing MIDI commands
* Make the UI as much intuitive as possible, drag & drop or visual
* Allow configuration sets - settings for each device

## Architecture of the application
The application is built in [Angular](https://angular.io/), reactive programming and state management with the redux pattern is achieved by [Reactive Extensions for Angular](https://github.com/ngrx). To support multiple platforms like Linux, Windows and OSX the application is packaged using [Electron](https://electronjs.org/). For now it will be a standalone application, later we can think about running it directly in browser (which needs to support [Web MIDI Api](https://webaudio.github.io/web-midi-api/)).
