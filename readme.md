# Generar un server basico con node.js + express

1. Generar una carpeta llamada 'server'
2. Dirigirse a 'server' y ejecutar el comando: 
```console 
npm init 
```
3. Definir como punto de entrada "main" al archivo _app.js_
4. Instalar express como dependencia ejecuntando el comando: 
```console 
npm install express
```
5. Crear un archivo _app.js_ dentro de la carpeta 'server' y agregar lo siguiente (hacer click para ver app.js):

<ul>

---

<details><summary>Ver app.js</summary>
<p>

```JavaScript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

</p>
</details>

---

> Tener en cuenta que que para cuando trabajemos con POST requests, hay que agregar un middleware para interpretar un
> body de tipo json.
>
> Habría que agregar las siguientes líneas:
>> const bodyParser = require('body-parser') --> En donde se están todos los require
>>
>> app.use(bodyParser.json) --> Justo antes de definir los primeros endpoints

</ul>


6. Guardar y ejecutar el comando: node app.js
7. Escribir en la barra de direcciones en un navegador (o en Postman), la siguiente direccion: http://localhost:3000/