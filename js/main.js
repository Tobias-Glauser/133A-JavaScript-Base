/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code

    let a = 'Bonjour';
    let b = 'toto';

    console.log(a, b);
    const  prenom = prompt('Entrez votre prénom :');
    const name = prompt('Entrez votre nom :');
    alert(`Bonjour, ${prenom} ${name} !`);
}()); // Main IIFE

