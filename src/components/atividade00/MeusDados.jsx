
//FUNCTION forma classica
/*function MeusDados () {
    return (
        <div>
            <h1>Universidade Federal do Ceará - UFC </h1>
            <h2> Engenharia de Software </h2>
            <h3> Mariana Hofer & Luigy Gabriel </h3>
        </div>
    )
}*/

//ARROW functions COM return
const MeusDados = () => {

    const textTitle = {
        backgroundColor: '#ffff',
        color: '#1C1D22',
        fontSize: '24px',
        paddingTop: '5px',
        paddingBottom: '25px',
        margin: '0px'
    }

    const subTitle = {
        backgroundColor: '#03658C',
        color: '#ffff',
        fontSize: '16px',
        padding: '10px',
        margin: '0px'

    }

    const textBody = {
        fontSize: '14px',
    }

    return (
        <div>
            <h1 style={textTitle}> Universidade Federal do Ceará - UFC </h1>
            <h2 style={subTitle}> Engenharia de Software - Campus Quixadá </h2>
            <h3 style={textBody}> by Mariana Hofer & Luigy Gabriel </h3>
        </div>
    )
}

//ARROW functions COM return na div
/*const MeusDados = () => {
    return <div>
            <h1>Universidade Federal do Ceará - UFC </h1>
            <h2> Engenharia de Software </h2>
            <h3> Mariana Hofer & Luigy Gabriel </h3>
        </div>
}*/

//ARROW functions SEM return
/*const MeusDados = () => 
    <div>
        <h1>Universidade Federal do Ceará - UFC </h1>
        <h2> Engenharia de Software </h2>
        <h3> Mariana Hofer & Luigy Gabriel </h3>
    </div>
*/

export default MeusDados