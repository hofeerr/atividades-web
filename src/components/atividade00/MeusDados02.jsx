const MeusDados02 = ({ universidade, curso, nomes}) => {

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
        padding: '10px',
        fontSize: '14px',
    }

    return (
        <div>
            <h1 style={textTitle}>{universidade}</h1>
            <h2 style={subTitle}>{curso}</h2>
            <h3 style={textBody}>{nomes}</h3>
        </div>
    )

}

export default MeusDados02