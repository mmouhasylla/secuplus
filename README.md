# ECONS - Site Web Entreprise 🏗️

ECONS est un site web moderne et professionnel pour une entreprise de Bâtiment et Travaux Publics, construit avec la bibliothèque React. Il présente l'entreprise, ses activités, ses projets et permet aux clients de prendre contact facilement.

## 📙 Fonctionnalités

-   **📖 Pages Multiples**
    -   Accueil
    -   À propos
    -   Projets
    -   Activités
    -   Contact
-   **🌍 Support Multilingue** (Français/Anglais)
-   **📱 Design Entièrement Responsive**
-   **📧 Formulaire de Contact Intégré**
-   **⚙️ Configuration Facile**

## 🚀 Démarrage Rapide

Clonez ce repository. Vous aurez besoin de `NodeJS` et `git` installés sur votre machine.

## 🛠 Installation et Configuration

1. **Installation** : `npm install`

2. **Lancement du projet** : `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans le navigateur.
La page se recharge automatiquement si vous modifiez le code.

## 📁 Structure du Projet

-   `/public` : contenus accessibles publiquement (images, médias)
-   `/src` : tous les composants du projet
    -   `/src/components/` : composants réutilisables
    -   `/src/data` : configurations de l'application
    -   `/src/pages` : pages principales du site

## ⚙️ Configurations

### Fichier : `/src/data/user.js`

Configurez les informations de l'entreprise :

```javascript
const INFO = {
    main: {
        title: "ECONS",
        name: "ECONS Batiment & Travaux Publics",
        email: "contact@econs.com",
        phone: "+221 33 123 45 67",
        address: "Dakar, Senegal",
        website: "https://econs.com"
    },
    socials: {
        telephone: "+221 33 123 45 67",
        linkedin: "https://linkedin.com/company/econs",
        twitter: "https://twitter.com/econs",
    },
```


# 🏢 À Propos d'ECONS

ECONS incarne une véritable passion pour la construction et la livraison de projets, soutenue par **36 ans d'expertise**.  
L'entreprise est basée au **Sénégal** avec des filiales à travers l'**Afrique** (Bénin, Côte d'Ivoire, Rwanda) et en **Europe** (France).

---

## 📞 Contact

- **Email** : [contact@econs.com](mailto:contact@econs.com)  
- **Téléphone** : +221 33 123 45 67  
- **Adresse** : Dakar, Sénégal

---

## 🤔 FAQ

**Q :** Les sous-pages ne sont pas accessibles par liens directs ?  
**A :** Configurez votre serveur web pour rediriger toutes les requêtes vers `index.html` (voir section *Déploiement*).

---

## 🌱 Contribution

Si vous avez des suggestions d'amélioration pour le site **ECONS**,  
n'hésitez pas à créer une *issue* ou à *forker* le projet pour implémenter vos idées.

---

💻 Développé avec **React** pour **ECONS Bâtiment & Travaux Publics** 🏗️

