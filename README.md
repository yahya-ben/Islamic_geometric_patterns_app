# Motif_app
Une application mobile pour la generation des motifs islamiques geometriques

### L'organisation de l'application

L'application est organisee en plusieurs fichiers et documents :

* App.js : Ce document sert a lancer l'application. Dans son code on trouve qu'il utilise le React Navigation qui est un feature essentiel pour assurer la navigation entre les pages de l'app.
* pages : Est un fichier qui regroupe les pages de l'app. Pour le moment, il contient PageAcceuil.js et NewNouveauDesign.js
  * PageAcceuil.js : Ce document represente la premiere page de notre app, il contient un composant <Logo/> et deux boutons concue avec le composant <TouchableOpacity>. Le style de cette page est en bas. Les imports sans en haut.
  * NewNouveauDesign.js : Ce document est le composant coeur de notre app. Il est un point de regroupement pour tous les autres composant. On detaillera plus tard.
-- Je vais completer cette partie plus tard. Pour le moment, jetter un coup d'oeil sur le code de l'app peut etre utile afin de bien comprendre. 

### Problemes et ameliorations
  L'etat de l'application est resonable, mais on peut faire mieux ;)
  * L'application prend un peut de temps pour generer les motifs ce qui peut etre du au nombre que le composant myMotif se reconstruit. On peut donc optimiser ceci et gagner un bcp de temps. 
  * Quelques boutons ne sont pas encore fonctionneles
  * Il est preferable d'ajouter d'autre couleurs 
  * La partie d'exportation n'est pas encore implementer (necessite un peu de travaille)
  * L'ajout d'autre tuilage va enrichir l'application, donc comme bonus, on peut ajouter d'autres tuilage plus sophistiquees.
  * La partie de generation de motifs varie seulement l'angle de contacte, on peut varier d'autres parametres et generer des motifs plus jolies
  * ...
 
 ## Important !!!!
 Il est preferable de travailler dans une branche separee et de tester le code sur machine avant de l'incorporer avec la branche master 
