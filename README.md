# Music App - Type Deezer/Spotify

## Structure du projet

- **backend/** : serveur Node.js/Express, gestion BDD MongoDB, authentification
- **frontend/** : interface React
- **README.md** : ce fichier

## Fonctionnalités de base

- Création de compte utilisateur
- Connexion utilisateur
- (À compléter) Upload et lecture de musiques, création de playlists, etc.

## Lancer le projet

1. **Backend**
   - `cd backend`
   - `npm install`
   - Crée un fichier `.env` avec :
     ```
     MONGO_URI=mongodb://localhost:27017/musicapp
     JWT_SECRET=unSecretTresLong
     ```
   - `node server.js`

2. **Frontend**
   - `cd frontend`
   - `npm install`
   - `npm start`

---
