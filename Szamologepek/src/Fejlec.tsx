import {} from 'react'
interface Props {
    cim: string
}
export function Fejlec(props: Props) {

   return (
        <>
            <header>
                <h1>{props.cim}</h1>
            </header>
        </>
    )
}

export default Fejlec