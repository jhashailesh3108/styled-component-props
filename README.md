# styled-component-props

```javascript
npm install styled-component-props
```

```javascript
yarn add styled-component-props
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

  // fall back gives default color if nothing match here fallback is default means it will provide white coloer.

  const StyledParagraph = styled.p`
    colors: ${ styledProps(colors, {fallback: "default"})};
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

  // fall back gives default color if nothing match here fallback is default means it will provide white coloer.

  const StyledParagraph = styled.p`
    colors: ${ styledProps(colors, {fallback: "default", variant: "customColor"  })};
    font-size: 1rem;
  `;

  // use it as
  <StyledParagraph customColor="danger" >My red paragraph</StyledParagraph>

```