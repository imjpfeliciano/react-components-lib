## @imjpfeliciano/react-components-lib

### Requerimientos

El cliente debe cumplir con los siguientes requerimientos para que la librería funcione correctamente:

- nodejs v16 o superior
- Tener la siguiente lista de dependencias instaladas

  ```
  "peerDependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "styled-components": "^5.3.6"
  }
  ```

### Crear un nuevo componente

#### Requerimientos de desarrollo

Se necesita instalar la librería [hygen](https://www.hygen.io/) de manera global para poder hacer uso de los templates

`$ npm install -g hygen`

Para crear un nuevo componente debes ejecutar el siguiente comando:

`$ npm run create:component MyComponentName`

sobreescribiendo `MyComponentName` por el nombre que deseas tenga este nuevo componente, la salida del siguiente comando será una carpeta en el directorio de componentes con la siguiente estructura:

```
src
 |-- components
        |-- MyComponentName
                |-- MyComponentName.stories.tsx
                |-- MyComponentName.styled.tsx
                |-- MyComponentName.test.tsx
                |-- MyComponentName.tsx
                |-- MyComponent.types.ts
                |-- index.ts
```

En donde debemos agregar de acuerdo al tipo de archivo lo siguiente:

- `.stories.tsx` -> La historia que se mostrará en storybook
- `.styled.tsx` -> Los estilos del componente utilizando `styled-components`
- `.test.tsx` -> Pruebas unitarias para el componente
- `MyComponentName.tsx` -> Este será el wrapper final que se exportará del componente (Aquí puedes agregar todos los styled que creaste)
- `.types.tsx` -> Tipos o Interfaces creadas para el componente
- `index.ts`-> Se exportará el componente por default, y puedes agregar tipos que también desees exportar
