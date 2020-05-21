
## CI and Deployment##

Postup práce na projekte
1. Vytvorenie github repozitára
2. Vytvorenie tokenu s názvom "TOKEN" v profiles/settings/Developer settings/Personal Access Tokens - token slúži na overenie spojenia 
3. Nastavenie workflowu v "Actions", kde nastavíme yml súbor, v ktorom sú jednotlivé kroky potrebné pre deploy stránky na gihubpages.        Tento súbor sa nachádza na novovytvorenej vetve s názvom "deploy_branch"
4. Nastavenie tokenu "TOKENS" v repozitári WPub_cicd v settings/secrets
5. Všetky súbory (index.html, script.js, style.css) boli pushnute na "deploy_branch"
6. Pri pushnuti, som sledoval spracovanie a vytvorenie súborov na branch "master" - bez chyby
7. Nastavenie v settings/options/GitHub pages, ktorá brencha bude deploynutá na GitHub Pages 

Linky:
Repozitár - https://github.com/Hemii/WPub_cicd
Github Pages - https://hemii.github.io/WPub_cicd/


Princíp fungovania deployu:
Pri každom pushnuti sa vymaže obsah branche "master" a následne sa znova prekopírujú upravené súbory. 

# Meno: Anton Rusňák
