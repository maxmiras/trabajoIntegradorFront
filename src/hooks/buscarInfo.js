async function buscarInfo () {
    let info ; 
    fetch('../components/datos.txt' ).then(res => res.json()).then(res2 => info = res2)   
    return ( info );
}
 
export default buscarInfo;