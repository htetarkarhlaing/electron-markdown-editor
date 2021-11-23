/* eslint-disable no-undef */
import process from "process";

if(typeof global === 'undefined' || typeof global === "undefined") {
    // global window
    window.global = window
    window.process = process
}