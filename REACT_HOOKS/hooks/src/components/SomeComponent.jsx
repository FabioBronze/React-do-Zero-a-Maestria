import { forwardRef, useRef, useImperativeHandle } from "react";

const SomeComponent = forwardRef((props, ref) => {
  const localInputref = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputref.current.value.length > 3) {
          localInputref.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no maximo 3 caracteres</p>
      <input type="text" ref={localInputref} />
    </div>
  );
});

export default SomeComponent;
