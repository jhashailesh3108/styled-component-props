import styledProps from './index';

describe('styled-props', () => {
  const colorProps = {
    default : "white",
    danger: "red",
    warning: "orange"
  }

  it('should give the desired value on the basis of props passed to it as bolean', () => {
    //  <Component danger | warning | etc  />
    const props = {danger: true}
    const color = styledProps(colorProps)(props);
    expect(color).toBe("red")
  });

  it('should give the fallback value if props does not match', () => {
    //  <Component info  />
    const props = {info: true};
    expect(styledProps(colorProps)(props)).toBe(undefined);
    expect(styledProps(colorProps, {fallback: "default"})(props)).toBe("white");
  });

  it('should give the desired value on the basis of props passed to it as varient', () => {
    //  <Component color="danger" | "warning" | "success" | etc  />
    const props = {color: "danger"};
    expect(styledProps(colorProps)(props)).toBe(undefined);
    expect(styledProps(colorProps, {fallback: "default", variant: "color"})(props)).toBe("red");
  });

  it('should give the default value if fallback and props does not match with any value', () => {
    //  <Component color="danger" | "warning" | "success" | etc  />
    const props = {color: "timberColor"};
    expect(styledProps(colorProps)(props)).toBe(undefined);
    expect(styledProps(colorProps, {fallback: "another", variant: "color", default:"#ff0"})(props)).toBe("#ff0");
    expect(styledProps(colorProps, {variant: "color", default:"#ff0"})(props)).toBe("#ff0");
  });
});
