import { ExpressionParam } from "nerdamer-prime";

function setCalculoDerivado(varE: ExpressionParam | undefined, varX: string = 'x', varT: string = '1'){
    if (varE && varX ){
      const x = window.nerdamer.diff(varE, varX, Number(varT));
      return x.expand().toTeX()
    }

  }

  function setCalculoIntegral(varE: ExpressionParam | undefined, varX: string = 'x', varStart?: string, varEnd?: string){
    if(varE && varX && varStart && varEnd){
        const x = window.nerdamer(`defint(${varE}, ${varStart}, ${varEnd}, ${varX})`);
        return x.toTeX()
    }

    if(varE && varX && !varStart && !varEnd){
        const x = window.nerdamer.integrate(varE, varX);
        return x.toTeX()
    }
    
  }

  export { setCalculoDerivado, setCalculoIntegral };
