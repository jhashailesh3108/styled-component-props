type PropsLike = { [key: string]: any };
type MapperFunction = (props: PropsLike) => any;

type styledPropsFunc  = (map: PropsLike, options?: {
  /**
   * When props has no matching value in property, set any default property.
   * 
   * @param {string} keyName string
   */
  fallback?: string,
  /**
   * In case you are passing value as props value
   * 
   * **color = "default"**
   * 
   * set **variant** :**color**
   * @param {string} propName string
   */
  variant?: string,
  /**
   * When fallback and props doesn't matches with any property
   * in that case you want to provide a custom value
   * 
   * set **default = "#fff"**
   * @param {string} propName string
   */
  default?: string
}) => MapperFunction;

/**
 * map the value object with the props and return desired output
 * @param map object of key and value pair
 * @param options choose different way to handle values.
 */
const styledProps: styledPropsFunc = (map, options = {}) => (props: any)=>{
  const {fallback, variant, default: defaultValue} = options;
  const keysFromProps: string[] = Object.keys(map).filter(key => {
    return variant ? props[variant] === key : !!props[key] 
  });

  if (keysFromProps.length > 1) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(
        `[styledProps] Multiple props provided: ${keysFromProps.join(', ')}, use one of them at a time.`
      );
    }
  }
    const keyFromProps = keysFromProps[0];
    if (map[keyFromProps] !== undefined) {
      return map[keyFromProps];
    }

    if (fallback) {
      if ( map[fallback] !== undefined) {
        return map[fallback];
      }
      if(defaultValue){
        return defaultValue
      }
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error(
          `[styledProps] Unknown fallback prop provided: ${fallback}.`
        );
      }
    }
    return defaultValue;
}

export default styledProps;