interface Props {
    subs: Array<{
        nick: string,
        subsMonths: number,
        avatar: string,
        description?: string
    }>
}



const List = ({subs}: Props) =>{

    const renderList = (): JSX.Element[] =>{
        return subs.map(sub => (
            <li key={sub.nick}>
                <img src={sub.avatar} alt={sub.nick} />
                <h4>{sub.nick} (<small>{sub.subsMonths}</small> )</h4>
                <p>{sub.description?.substring(0, 10)}</p>
            </li>
        ))
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
} 

export default List;