import {} from 'react'

interface Props {
    ido: number
}

export function Lablec(props: Props) {

   return (
        <>
            <footer>
            <p>Az oldalt készítette: Pásztor Márk</p>
            <p>A készítés dátuma: 2024.10.01.</p>
            <p>A feladatra fordított idő: {props.ido} perc.</p>
            <p>Nyilatkozat MI használatáról. Nem használtam MI-t a feladatmegoldáshoz</p>
            </footer>
        </>
    )
}

export default Lablec