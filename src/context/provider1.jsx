import { Contexto1 } from "./contexto1";

let dt = {
    mostrarI : false,
    registrado : false
}



export const provider1 = ({childrens}) => {
    return (  
        <Contexto1.Provider value={{dt}}>
            {childrens}
        </Contexto1.Provider>
        );
}
 
