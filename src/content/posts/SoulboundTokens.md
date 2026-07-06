---
title: "SBT: el token que nadie te puede comprar"
description: "Los Soulbound Tokens (SBT) son tokens intransferibles que no representan propiedad, sino identidad: credenciales, logros y reputación verificables on-chain."
pubDate: 2026-07-06
tags: ["sbt", "soulbound tokens", "nft", "identidad", "reputación", "ethereum", "web3"]
author: "Francisco Bermejo Melero"
---

Cuando alguien piensa en un token no fungible, piensa en algo que se compra y se vende: un JPEG caro, una entrada de coleccionista, un objeto de un videojuego. La idea de propiedad va pegada al concepto de NFT casi por definición.

Pero hay una familia de tokens que rompe esa regla desde el diseño: no se pueden vender, ni regalar, ni transferir a otra cuenta bajo ningún concepto. Se llaman **Soulbound Tokens (SBT)**, y precisamente esa "limitación" es lo que los hace útiles.

---

## ¿Qué son los SBT?

Un SBT es una insignia que se asocia a tu dirección pública de forma permanente. Una vez que se emite, se queda ahí para siempre: no existe un mercado secundario porque no hay nada que negociar.

Sirve para dejar constancia, de forma pública y verificable *on-chain*, de algo que te pertenece a ti y solo a ti: un diploma, un logro conseguido en un juego, tu participación en la votación de una DAO.

**No es un objeto. Es una prueba.**

---

## En qué se diferencia de un NFT normal

La diferencia no está en la tecnología de base —ambos suelen construirse sobre el mismo estándar de NFT— sino en para qué se usan:

| | NFT normal | SBT |
|---|---|---|
| **Transferible** | Sí, se compra y se vende | No, nunca |
| **Representa** | Propiedad, coleccionismo | Identidad, reputación |
| **Valor de mercado** | Depende de la demanda | No tiene sentido hablar de "precio" |
| **Ejemplo típico** | Una obra de arte digital | Un título, un logro, un voto |

Esa intransferibilidad no es solo una promesa: está codificada en el propio contrato. Hay varios estándares que definen cómo hacerlo en Ethereum, entre ellos dos que vale la pena conocer:

### EIP-5192

La versión minimalista. Simplemente bloquea la transferencia y expone una función para que cualquiera pueda comprobar si un token es soulbound o no.

### EIP-5484

Añade una capa más: define quién puede "quemar" el token (el emisor, el propietario, ambos o nadie) y exige que el receptor dé su consentimiento antes de que se emita.

Esto resuelve un problema real: si pierdes acceso a tu wallet, alguien con autorización puede quemar el SBT viejo y emitir uno nuevo en tu nueva dirección.

---

## Para qué sirve esto en la práctica

La aplicación más intuitiva es la de credenciales. Ya hay proyectos piloto probando certificar formación mediante SBT en redes de prueba de Ethereum, con estudiantes usando su propia wallet para recibir el certificado de un curso: un primer paso hacia diplomas que cualquier empresa podría verificar en segundos, sin pedir referencias ni títulos físicos.

Otros terrenos donde esto ya se está usando o explorando:

- **Reputación en Web3**: proyectos de identidad como Passport emiten SBT para certificar que has verificado tu identidad de una forma concreta, sin necesidad de repetir ese proceso en cada aplicación que uses.
- **Gaming**: recompensas por logros que no deberían poder comprarse. Si un SBT certifica que superaste cierto nivel, nadie puede simplemente pagar por ese mismo prestigio.
- **Airdrops selectivos**: en vez de repartir tokens a cualquiera con una wallet activa, se puede exigir un SBT concreto que demuestre una participación genuina previa.

---

## Por qué importa más allá de la moda de los NFT

Los NFT tuvieron su momento de hype y luego el mercado se enfrió. Los SBT nunca han tenido ese pico, precisamente porque no se puede especular con ellos. No hay bots comprando SBT a un precio bajo para revenderlos después.

Y ahí está lo interesante: son quizás una de las piezas de infraestructura Web3 más aburridas en el buen sentido —sin narrativa de precio, sin gráficos verdes o rojos— pero con más potencial real de cambiar cosas fuera del propio mundo cripto. Identidad, reputación, credenciales verificables sin depender de una única empresa que decide si tu perfil es válido o no.

¿Le ves aplicación a este tipo de token en algún caso que no sea el típico ejemplo del diploma universitario?
