# styled-component-props

```javascript
npm install styled-components-props
```

```javascript
yarn add styled-components-props
```

**How to use**


1. Pass direct props

  ```javascript
  import styled from 'styled-component';
  import styledProps from 'styled-component-props';

  const colors = {
    default: "white",
    danger: "red",
    warning: "orange"
  };

  // fall back gives default color if nothing match here fallback is default means it will provide white colors.

  const StyledParagraph = styled.p`
    color: ${ styledProps(colors, {fallback: "default"})};
    font-size: 1rem;
  `;

  // use it as
  <StyledParagraph danger >My red paragraph</StyledParagraph>

  ```
2. Pass Props as varient

  ```javascript
  import styled from 'styled-component';
  import styledProps from 'styled-component-props';

  const colors = {
    default: "white",
    danger: "red",
    warning: "orange"
  };

  // fall back gives default color if nothing match here fallback is default means it will provide white colors.

  const StyledParagraph = styled.p`
    color: ${ styledProps(colors, {fallback: "default", variant: "customColor"  })};
    font-size: 1rem;
  `;

  // use it as
  <StyledParagraph customColor="danger" >My red paragraph</StyledParagraph>

```
3. Pass default value in case you don't want fallback.

  **Note :** default has least priority. In case you have provided fallback with default it will first check for fallback and then retun default value if fallback doen't match.

  ```javascript
    import styled from 'styled-component';
    import styledProps from 'styled-component-props';

    const colors = {
      default: "white",
      danger: "red",
      warning: "orange"
    };

    // default value will be #ff0 if fall back and props doesn't matches with any of the colors property.

    const StyledParagraph = styled.p`
      color: ${ styledProps(colors, {fallback: "secondary", variant: "customColor", default: "#ff0" })};
      font-size: 1rem;
    `;

    // use it as
    <StyledParagraph customColor="info" >My red paragraph</StyledParagraph>
  ```
