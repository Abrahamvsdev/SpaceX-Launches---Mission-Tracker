import {useState} from 'preact/hooks'

export function Counter() {
    const [counter, setCounter] = useState(0)
    return(
        <>
        <div class="space-x-4 text-center text-xl mb-10">
            <p class="text-center mb-4">Contadores de cohetes exitosos</p>
            <button class="border px-4 py-2 text-xl text-green-400 text-center"  onClick={()=>setCounter(counter=>counter + 1)}>+</button>
            <span class="text-yellow-300 text-xl mr-4" >{counter}</span>
            <button class="border px-4 py-2 text-xl text-red-400"  onClick={()=>setCounter(counter=>counter - 1)}>-</button>
        </div>
        </>
    )
}