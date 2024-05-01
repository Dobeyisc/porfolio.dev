import Typed from "typed.js";
import { useRef, useEffect } from "preact/hooks";

export const TextMachine = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `<h1>Frontend <br />Developer</h1>`,
        `<h1>FullStack <br />Developer</h1>`,
        `<h1>Backend <br />Developer</h1>`,
      ],
      stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: false, // Repetir el array de strings
      loopCount: Infinity,
      showCursor: false, // Mostrar cursor palpitanto
      cursorChar: "|", // Caracter para el cursor
      contentType: "html", // 'html' o 'null' para texto sin formato
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <section>
      <div className="font-serif text-start text-7xl sm:text-8xl min-[280px]:text-6xl text-neutral-900 dark:text-white">
        <span ref={el}/>
      </div>
    </section>
  );
};
