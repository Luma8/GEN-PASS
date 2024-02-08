import React, { useState } from "react"

function App() {
  const [password, setPassword] = useState('...');
  //const [compNum, setCompNum] = useState<number>(0);


  const genPassword = (comp: number) => {
    const caracters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let senha = '';
    for (let i = 0; i < comp; i++) {
      const indice = Math.floor(Math.random() * caracters.length);
      senha += caracters.charAt(indice);
    }
    return senha;
  }

  const genNewPass = () => {
    const newPass: any = genPassword(20);
    setPassword(newPass);
    console.log('click !')
  }

  const copyPass = () => {
    if(password != '...') {
      navigator.clipboard.writeText(password)
      .then(() => {
        alert('senha copiada com sucesso!!')
      }).catch((error) => {console.error(error)})
    } else {
      console.error("password é nulo")
    }
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <section className="grid">
        <div className="flex items-center gap-2">
          <div className="text-[#FFF] my-2 gen-tab bg-[#445256] py-2 px-5 rounded-[20px]">{password}</div>
          <button onClick={copyPass} className="rounded-[15px] p-2 bg-[#718f9c] text-[#FFF]">
            Copy
          </button>
        </div>
        {/*<input className="my-2 outline-none" placeholder="Quantos caracteres?" type="number" minLength={1} maxLength={2} />*/}
        <button className="my-2 text-[#FFF] font-bold p-2 rounded-[5px] bg-[#718f9c]" onClick={() => genNewPass()}>Gerar Senha</button>
      </section>
    </div>
  )
}

export default App
