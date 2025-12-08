---
title: "EOAs vs Cuentas de Contrato"
description: "Una introducción al mundo descentralizado y lo que nos espera."
pubDate: 2025-12-03
tags: ["web3", "blockchain", "intro"]
author: "Francisco Bermejo Melero"
---

## Una historia para entender cómo funcionan las cuentas en Ethereum (y la Web3)

Imagina una gran ciudad futurista llamada **ChainCity**.
En ella, todos los ciudadanos tienen acceso a un enorme sistema público donde cada acción queda registrada: transacciones, acuerdos, compras, ventas, votos… todo se escribe en un libro gigante visible para todos.

Ese libro es la **blockchain**.

Pero en ChainCity, no todos los habitantes son iguales. Hay dos tipos muy diferentes:
*   🧍 **Personas con pasaporte** — los humanos que pueden actuar por sí mismos
*   🏢 **Edificios inteligentes** — estructuras automáticas que ejecutan reglas preprogramadas

Así también funcionan las cuentas en Ethereum.

---

# 🧍 1. EOAs: Externally Owned Accounts
## Las cuentas controladas por personas

En ChainCity, las **personas** tienen un pasaporte biométrico que les permite interactuar con la ciudad. En Ethereum, esto es una **EOA** (Externally Owned Account).

### ¿Qué caracteriza a una EOA?

Una EOA tiene una clave privada, pertenece a un usuario (persona), puede iniciar transacciones, no puede ejecutar lógica interna (no tiene código) y paga gas para realizar acciones. Una EOA es como una cartera normal (MetaMask, Ledger, Coinbase Wallet).

Sus componentes principales son:
*   **Clave pública** → dirección Ethereum (0x...)
*   **Clave privada** → lo que permite firmar transacciones
*   **Balance** → ETH y tokens

### Cómo actúan:

Las EOAs son las *únicas* que pueden **iniciar transacciones**. Sin ellas, la red estaría parada.
Una EOA inicia una acción, esta se procesa y se refleja en la blockchain.
Piensa en ellas como **ciudadanos que pueden decidir hacer cosas**: enviar tokens, firmar un contrato, votar…

---

# 🏢 2. Cuentas de Contrato
## Edificios inteligentes que ejecutan reglas

En ChainCity hay edificios muy peculiares: cuando entras, se activan mecanismos automáticos que dependen de reglas inscritas en sus paredes.

Esos edificios son los **smart contracts**, y su representación en la red son las **Contract Accounts**.

### ¿Qué caracteriza a una Cuenta de Contrato?

Una Cuenta de Contrato tiene código dentro, ejecuta instrucciones preprogramadas, no puede iniciar transacciones por sí misma, no tiene clave privada y no existe "el dueño": solo las reglas importan.

Sus componentes principales son:
*   **Código** → reglas del contrato
*   **Storage** → variables guardadas
*   **Balance** → pueden tener ETH y tokens
*   **Dirección** → una 0x fija, generada en el deploy

### ¿Cómo actúan?

Un contrato **solo actúa cuando alguien lo llama**.
Una EOA llama al contrato, el contrato ejecuta el código y actualiza la red.
Son **reactivos**, no activos.

Es como un edificio inteligente: no hace nada… hasta que alguien pasa por la puerta y activa un sensor.

---

# 🔄 3. EOA vs Cuenta de Contrato: diferencias

| EOAs (usuarios)                 | Cuentas de Contrato             |
| :------------------------------ | :------------------------------ |
| Tienen clave privada            | No tienen clave privada         |
| Inician transacciones           | NO pueden iniciar transacciones |
| No tienen código                | Tienen código y storage         |
| Pagan gas                       | Ejecutan lógica automática      |

---

# 🧠 4. Ejemplo narrativo:
## Una visita a ChainCity

Imagina a **Luna**, una ciudadana EOA que quiere interactuar con un edificio inteligente:

1.  Luna entra al portal de **"Casa de Subastas Automática"**.
2.  La puerta le pide **firmar** (transacción).
3.  El edificio, al ver su firma válida, ejecuta su código: registra su puja, verifica el tiempo y actualiza al mejor postor.
4.  El resultado queda grabado en el libro público.

Luna, como EOA, inició el proceso. El edificio, como contrato, reaccionó.

---

# 💥 5. ¿Por qué es tan importante esta distinción?

Porque en Web3:
*   Solo las EOAs pueden **firmar y autorizar acciones**.
*   Los contratos son **programas que garantizan reglas automáticas**.
*   La combinación de ambos permite crear: DeFi (Uniswap, Aave…), Marketplaces NFT, DAOs, Juegos on-chain, L2s completas e Identidad Web3.

Sin EOAs no habría usuarios. Sin contratos no habría lógica ejecutable.

---

# 🧬 6. El futuro: Account Abstraction
## Cuando las cuentas de contrato también se comportarán como EOAs

La frontera entre EOAs y contratos se está desdibujando.

Con **Account Abstraction (ERC-4337)**, una cuenta de contrato podrá firmar transacciones, los usuarios podrán tener wallets programables, los pagos de gas podrían ser invisibles, las wallets podrán tener recuperación social y se podrán ejecutar reglas automáticas directamente desde la cuenta del usuario.

En el futuro, **todos los usuarios podrían tener cuentas inteligentes**.

La historia de ChainCity está a punto de volverse aún más interesante.

---

# 📌 Conclusión

Las **EOAs** son los usuarios: claves privadas, firmas, acción humana.
Las **Cuentas de Contrato** son los edificios inteligentes: código, reglas automáticas, ejecución condicionada.

Ambos forman el corazón del ecosistema Ethereum y Web3.

Y ahora que entiendes la diferencia… estás listo para comprender uno de los temas más revolucionarios de Web3: **la abstracción de cuentas.**
