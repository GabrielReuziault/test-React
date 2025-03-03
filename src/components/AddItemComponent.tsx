import { useState } from "react";
import { Button, Form, Input } from "antd";

type AddItemProps = {
    onAdd: (title: string) => void;
};

export default function AddItemComponent({ onAdd }: AddItemProps) {
    const [newItemTitle, setNewItemTitle] = useState("");

    const handleSubmit = () => {
        if (newItemTitle.trim()) {
            onAdd(newItemTitle.trim());
            setNewItemTitle("")
        }
    };

    return (
        <Form style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Input
                value={newItemTitle}
                placeholder="Titre de l'item"
                onChange={(e) => setNewItemTitle(e.target.value)} // Gère la saisie
            />
            <Button type="primary" onClick={handleSubmit}>
                Ajouter
            </Button>
        </Form>
    );
}