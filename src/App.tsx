import 'katex/dist/katex.min.css';
import { ExpressionParam } from "nerdamer-prime";
import { useState } from "react";
import { BlockMath } from 'react-katex';
import { setCalculoDerivado, setCalculoIntegral } from "./utils/handleCalculation";

function App() {
  const [navigation, setNavigation] = useState<string>('derivada')
  const [functionParam, setFunctionParam] = useState<ExpressionParam>("")
  const [variableParam, setVariableParam] = useState<string>()
  const [timesParam, setTimesParam] = useState<string>()
  const [startParam, setStartParam] = useState<string>()
  const [endParam, setEndParam] = useState<string>()
  const [result, setResult] = useState<string>()

  return (
    <div className="w-screen min-h-screen bg-zinc-800 text-white font-Roboto-Mono">
      <div className="w-full flex flex-col justify-center items-center">
        <header className="w-[1024px] text-2xl flex justify-between p-5">
          <button onClick={() => {setNavigation('derivada')}} className={`${navigation == 'derivada' && 'underline'}`}>Derivação</button>
          <button onClick={() => {setNavigation('integral')}} className={`${navigation == 'integral' && 'underline'}`}>Integral</button>
          <button onClick={() => {setNavigation('questions')}} className={`${navigation == 'questions' && 'underline'}`}>Questões (IA)</button>
        </header>
        <main className="w-[1024px] flex justify-center mt-10">
          {navigation == 'derivada' &&
          <div className="flex justify-center items-center w-3/5">
            <div className=" flex flex-col gap-5 items-center">
              <h1 className="w-full text-center text-4xl mb-5 font-bold">Calculadora de derivada</h1>
              <div className='w-[414px] flex flex-col justify-center items-center gap-5'>
                <input type="text" value={functionParam?.toString()} className="text-white bg-transparent border border-white w-full rounded-md text-xl p-3 outline-none" placeholder='Expressão a ser calculada' onChange={(e) => {setFunctionParam(e.target.value)}}/>
                <div className='w-full flex justify-start items-center gap-5'>
                  <label htmlFor="">Variável:</label>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" maxLength={1} placeholder='x' onChange={(e) => {setVariableParam(e.target.value)}}/>
                </div>
                <div className='w-full flex justify-start items-center gap-5'>
                  <label htmlFor="">Enésima derivada:</label>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" maxLength={1} placeholder='1' onChange={(e) => {setTimesParam(e.target.value)}}/>
                </div>
              </div>
              <div className="w-[414px] grid grid-cols-4 gap-4">
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Raiz de' onClick={() => {(setFunctionParam(functionParam + 'srqt()'))}}>Raiz</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Elevado à potência de x' onClick={() => {(setFunctionParam(functionParam + 'exp(x)'))}}>Exp</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Variável' onClick={() => {(setFunctionParam(functionParam + 'b'))}}>Var</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Logaritmo de x na base a' onClick={() => {(setFunctionParam(functionParam + 'log(a,x)'))}}>Log</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='valor absoluto' onClick={() => {(setFunctionParam(functionParam + 'abs(x)'))}}>Ln</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Logaritmo natural' onClick={() => {(setFunctionParam(functionParam + 'ln'))}}>Abs</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Pi' onClick={() => {(setFunctionParam(functionParam + 'pi'))}}>π</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Sen de x' onClick={() => {(setFunctionParam(functionParam + 'sin(x)'))}}>Sen</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Cos de x' onClick={() => {(setFunctionParam(functionParam + 'cos(x)'))}}>Cos</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Tang de x' onClick={() => {(setFunctionParam(functionParam + 'tan(x)'))}}>Tan</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Secante de x' onClick={() => {(setFunctionParam(functionParam + 'sec(x)'))}}>Sec</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Cossecante de x' onClick={() => {(setFunctionParam(functionParam + 'csc(x)'))}}>Csc</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Cotangente de x' onClick={() => {(setFunctionParam(functionParam + 'cot(x)'))}}>Cot</button>
                <input type="submit" value="=" className="col-span-3 border border-white rounded-md cursor-pointer h-[80px] text-xl" onClick={() => {setResult(setCalculoDerivado(functionParam, variableParam, timesParam))}}/>
              </div>
              <div className='mt-5'>
                <h1 className='text-xl'>Resultado:</h1>
                {result && <BlockMath math={`${result}`}/>}
              </div>
            </div>
          </div>}
          {navigation == 'integral' && 
            <div className="flex justify-center items-center w-3/5">
            <div className=" flex flex-col gap-5 items-center">
              <h1 className="w-full text-center text-4xl mb-5 font-bold">Calculadora de integral</h1>
              <div className='w-[414px] flex flex-col justify-center items-center gap-5'>
                <input type="text" value={functionParam?.toString()} className="text-white bg-transparent border border-white w-full rounded-md text-xl p-3 outline-none" placeholder='Expressão a ser calculada' onChange={(e) => {setFunctionParam(e.target.value)}}/>
                <div className='w-full flex justify-start items-center gap-5'>
                  <label htmlFor="">Variável:</label>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" maxLength={1} placeholder='x' onChange={(e) => {setVariableParam(e.target.value)}}/>
                </div>
                <div className='w-full flex justify-start items-center gap-5'>
                  <label htmlFor="">Intervalo (início):</label>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" placeholder='Integral definida' onChange={(e) => {setStartParam(e.target.value)}}/>
                </div>
                <div className='w-full flex justify-start items-center gap-5'>
                  <label htmlFor="">
                  Intervalo (fim):</label>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" placeholder='Integral definida' onChange={(e) => {setEndParam(e.target.value)}}/>
                </div>
              </div>
              <div className="w-[414px] grid grid-cols-4 gap-4">
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Raiz de' onClick={() => {(setFunctionParam(functionParam + 'srqt()'))}}>Raiz</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Elevado à potência de x' onClick={() => {(setFunctionParam(functionParam + 'exp(x)'))}}>Exp</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Variável' onClick={() => {(setFunctionParam(functionParam + 'b'))}}>Var</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Logaritmo de x na base a' onClick={() => {(setFunctionParam(functionParam + 'log(a,x)'))}}>Log</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='valor absoluto' onClick={() => {(setFunctionParam(functionParam + 'abs(x)'))}}>Ln</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Logaritmo natural' onClick={() => {(setFunctionParam(functionParam + 'ln'))}}>Abs</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Pi' onClick={() => {(setFunctionParam(functionParam + 'pi'))}}>π</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Sen de x' onClick={() => {(setFunctionParam(functionParam + 'sin(x)'))}}>Sen</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Cos de x' onClick={() => {(setFunctionParam(functionParam + 'cos(x)'))}}>Cos</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Tang de x' onClick={() => {(setFunctionParam(functionParam + 'tan(x)'))}}>Tan</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Secante de x' onClick={() => {(setFunctionParam(functionParam + 'sec(x)'))}}>Sec</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Cossecante de x' onClick={() => {(setFunctionParam(functionParam + 'csc(x)'))}}>Csc</button>
                <button className="col-span-1 border border-white rounded-md h-[80px] text-xl" title='Cotangente de x' onClick={() => {(setFunctionParam(functionParam + 'cot(x)'))}}>Cot</button>
                <input type="submit" value="=" className="col-span-3 border border-white rounded-md cursor-pointer h-[80px] text-xl" onClick={() => {setResult(setCalculoIntegral(functionParam, variableParam, startParam, endParam))}}/>
              </div>
              <div className='mt-5'>
                <h1 className='text-xl'>Resultado:</h1>
                {result && <BlockMath math={`${result}`}/>}
              </div>
            </div>
          </div>}
          {navigation == 'questions' && 
            <div><h1 className="w-full text-center text-4xl mb-5 font-bold">Em manutenção</h1></div>}
        </main>
      </div>
    </div>
  )
}

export default App