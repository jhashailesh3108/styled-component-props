type PropsLike = { [key: string]: any };
type MapperFunction = (props: PropsLike) => any;

type styledPropsFunc  = (map: PropsLike, options?: {
  fallback?: string,
  variant?: string
}) => MapperFunction;

const styledProps: styledPropsFunc = (map, options = {}) => (props: any)=>{
  const {fallback, variant} = options;
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
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error(
          `[styledProps] Unknown fallback prop provided: ${fallback}.`
        );
      }
    }
    return undefined;
}

export default styledProps;