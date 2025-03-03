import {useState} from "react";

export default function SettingsFormComponent() {
    const [color, setColor] = useState("#0000FF");

    return(
        <form>
            <h1 style={{color: color}}>Titre du test</h1>
            <input type="color"
                   value={color}
                   placeholder={"Couleur du titre"}
                   onChange={(e) => {
                       setColor(e.target.value);
                   }}
            />
            <button>Valider</button>
        </form>
    )
}