import 'katex/dist/katex.min.css';
import { RefreshCcw } from 'lucide-react';
import { ExpressionParam } from "nerdamer-prime";
import { useState } from "react";
import { BlockMath } from 'react-katex';
import { setCalculoDerivado, setCalculoIntegral } from "./utils/handleCalculation";

function App() {
  const [navigation, setNavigation] = useState<boolean>(false)

  const [functionParam, setFunctionParam] = useState<ExpressionParam>("")
  const [variableParam, setVariableParam] = useState<string>()
  const [timesParam, setTimesParam] = useState<string>()
  const [startParam, setStartParam] = useState<string>()
  const [endParam, setEndParam] = useState<string>()
  const [result, setResult] = useState<string>()
  return (
    // BODY TOP-TIER
    <div className="w-screen bg-[#F1F2F3] text-white font-Work-Sans flex flex-col items-center py-10">
      <div className="w-[1024px] relative flex justify-between">
        <main className="sticky top-7 bg-[#17171C] w-[500px] h-fit  flex items-center flex-col p-5 rounded-md">
        <div className='flex gap-5 mb-5'>
          <h1 className="w-full text-center text-3xl mb-5 font-bold">Calculadora {!navigation ? ('Derivada') : ('Integral')}</h1>
          <button onClick={() => {setNavigation(!navigation)}}>
            <RefreshCcw/>
          </button>
        </div>
        {navigation == false &&
          <div className="flex justify-center items-center w-3/5">
            <div className=" flex flex-col gap-5 items-center">
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
              <div className='h-[120px] flex items-center'>
                {result && 
                  <BlockMath math={`${result}`}/>
                }
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
            </div>
          </div>}
          {navigation == true && 
            <div className="flex justify-center items-center w-3/5">
            <div className=" flex flex-col gap-5 items-center">
              <div className='w-[414px] flex flex-col justify-center items-center gap-5'>
                <input type="text" value={functionParam?.toString()} className="text-white bg-transparent border border-white w-full rounded-md text-xl p-3 outline-none" placeholder='Expressão a ser calculada' onChange={(e) => {setFunctionParam(e.target.value)}}/>
                <div className='w-full flex justify-start items-center gap-5'>
                  <label htmlFor="">Variável:</label>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" maxLength={1} placeholder='x' onChange={(e) => {setVariableParam(e.target.value)}}/>
                </div>
                <div className='w-full flex justify- items-center gap-5'>
                  <label htmlFor="">Intervalo:</label>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" placeholder='Inicio' onChange={(e) => {setStartParam(e.target.value)}}/>
                  <input type="text" className="bg-transparent w-full outline-none border border-white rounded-md text-xl p-3" placeholder='Fim' onChange={(e) => {setEndParam(e.target.value)}}/>
                </div>
              </div>
              <div className='h-[120px] flex items-center'>
                {result && 
                  <BlockMath math={`${result}`}/>
                }
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
            </div>
          </div>}
        </main>
        <aside className='w-[510px] bg-[#17171C] flex flex-col items-center p-5 rounded-md'>
          {navigation == false && 
          <div>
            <h1 className='text-4xl text-center'>Regras de derivação</h1>
            <div>
            <h2>Funções Simples</h2>
              <BlockMath math="\frac{d}{dx}c = 0" />
              <BlockMath math="\frac{d}{dx}x = 1" />
              <BlockMath math="\frac{d}{dx}(ax) = a" />
              <BlockMath math="\frac{d}{dx}(x^n) = nx^{n-1}" />
              <BlockMath>
                {"\\frac{d}{dx} \\left( \\sqrt{x} \\right) = \\frac{1}{2 \\sqrt{x}}"}
              </BlockMath>
              <BlockMath>
                {"\\frac{d}{dx} \\left( x^{\\frac{1}{2}} \\right) = \\frac{1}{2} \\cdot x^{\\frac{1}{2} - 1} = \\frac{1}{2 \\sqrt{x}}"}
              </BlockMath>
              <BlockMath>
                {"\\frac{d}{dx} \\left( \\frac{1}{x^c} \\right) = -c \\cdot x^{-(c+1)} = -\\frac{c}{x^{c+1}}"}
              </BlockMath>
            <h2>Derivada da Soma</h2>
            <BlockMath math="\frac{d}{dx}[g(x) + h(x)] = g'(x) + h'(x)" />
            <h2>Derivada da diferença</h2>
            <BlockMath>
              {"\\frac{d}{dx}[g(x) - h(x)] = g'(x) - h'(x)"}
            </BlockMath>
            <h2>Derivada do Produto</h2>
            <BlockMath math="\frac{d}{dx}[g(x) \cdot h(x)] = g(x) \cdot h'(x) + g'(x) \cdot h(x)" />
            <h2>Derivada do Quociente</h2>
            <BlockMath math="\frac{d}{dx}\left(\frac{g(x)}{h(x)}\right) = \frac{g'(x) \cdot h(x) - g(x) \cdot h'(x)}{[h(x)]^2}" />
            <h2>Regra da Cadeia</h2>
            <BlockMath math="\frac{d}{dx}[g(h(x))] = g'(h(x)) \cdot h'(x)" />
            <h2>Funções Exponenciais e Logarítmicas</h2>
            <BlockMath math="\frac{d}{dx}(e^x) = e^x" />
            <BlockMath math="\frac{d}{dx}(\ln(x)) = \frac{1}{x}" />
            <BlockMath math="\frac{d}{dx}(a^x) = a^x \ln(a)" />
            <h2>Funções Trigonométricas</h2>
            <BlockMath math="\frac{d}{dx}(\sin(x)) = \cos(x)" />
            <BlockMath math="\frac{d}{dx}(\cos(x)) = -\sin(x)" />
            <BlockMath math="\frac{d}{dx}(\tan(x)) = \sec^2(x)" />
            <BlockMath math="\frac{d}{dx}(\sec(x)) = \sec(x) \tan(x)" />
            <BlockMath math="\frac{d}{dx}(\cot(x)) = -\csc^2(x)" />
            <BlockMath math="\frac{d}{dx}(\csc(x)) = -\csc(x) \cot(x)" />
            </div>
          </div>
          }
          {navigation == true &&
          <div>
            <h1 className='text-4xl text-center'>Regras de integração</h1>
            <div>
            <h2>Funções Simples</h2>
            <BlockMath math="\int c \, dx = cx + C" />
            <BlockMath math="\int [g(x) + h(x)] \, dx = \int g(x) \, dx + \int h(x) \, dx" />
            <BlockMath>
              {"\\int f'(x) g(x) \\, dx = f(x) g(x) - \\int f(x) g'(x) \\, dx"}
            </BlockMath>

            <h2>Funções Racionais</h2>
            <BlockMath math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C" />
            <BlockMath>
              {"\\int \\frac{1}{x} \\, dx = \\ln|x| + C"}
            </BlockMath>
            <BlockMath>
              {"\\int \\frac{du}{1 + u^2} = \\tan^{-1}(u) + C"}
            </BlockMath>
            <BlockMath>
              {"\\int \\frac{1}{a x^2 + x^2} \\, dx = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x}{a}\\right) + C"}
            </BlockMath>
            <BlockMath>
              {"\\int \\frac{du}{1 - u^2} = \\frac{1}{2} \\ln\\left|\\frac{1 + u}{1 - u}\\right| + C"}
            </BlockMath>

            <h2>Funções Logarítmicas</h2>
            <BlockMath math="\int \ln(x) \, dx = x \ln(x) - x + C" />
            <BlockMath>
              {"\\int \\log_a(x) \\, dx = x \\log_a(x) - \\frac{x}{\\ln(a)} + C"}
            </BlockMath>

            <h2>Funções Trigonométricas</h2>
            <BlockMath math="\int \cos(x) \, dx = \sin(x) + C" />
            <BlockMath math="\int \sin(x) \, dx = -\cos(x) + C" />
            <BlockMath math="\int \tan(x) \, dx = \ln|\sin(x)| + C" />
            <BlockMath math="\int \csc(x) \, dx = \ln|\csc(x) - \cot(x)| + C" />
            <BlockMath math="\int \sec(x) \, dx = \ln|\sec(x) + \tan(x)| + C" />
            <BlockMath math="\int \cot(x) \, dx = \ln|\sin(x)| + C" />
            </div>
          </div>
          }
        </aside>
      </div>
    </div>
  )
}

export default App