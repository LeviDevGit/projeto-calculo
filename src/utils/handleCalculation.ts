import { ExpressionParam } from "nerdamer-prime";

function setCalculoDerivado(varE: ExpressionParam | undefined, varX: string = 'x', varT: string = '1'){
    if (varE && varX ){
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
      const x = nerdamer.diff(varE, varX, varT);
      return x.expand().toTeX()
    }

  }

  function setCalculoIntegral(varE: ExpressionParam | undefined, varX: string = 'x', varStart?: string, varEnd?: string){
    if(varE && varX && varStart && varEnd){
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
        const x = nerdamer(`defint(${varE}, ${varStart}, ${varEnd}, ${varX})`);
        return x.toTeX()
    }

    if(varE && varX && !varStart && !varEnd){
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
        const x = nerdamer.integrate(varE, varX);
        return x.toTeX()
    }
    
  }

  export { setCalculoDerivado, setCalculoIntegral };
