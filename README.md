
# Nightwatchjs + POM + cucumberJS + Allure

Este es un proyecto base que utiliza Nightwatchjs como framework base integrado con cucumber para el lenguaje gherkins y allure report para el manejo de reportes y evidencias



## Como usarlo

primeramente debes instalar las dependencias

```bash
  npm install
```

luego puedes ejecutar las pruebas

```bash
  npm run test
```

el page object model se encuentran en la carpeta

```bash
  page-objects/
```

los archivos features y steps definitions estan en la carpeta

```bash
  test/features/
```

los archivos de reporte de salida para que se genere el allure se encuentran en esta carpeta

```bash
  tests_output/
```

para generar el reporte usa el comando

```bash
  npm run allure-generate
```

para abrir el reporte usa

```bash
  npm run allure-generate
```
