import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

type AddItemProps = {
    onAdd: (title: string, completed: boolean) => void; 
};

export default function AddItemComponent({ onAdd }: AddItemProps) {
    const [newItemTitle, setNewItemTitle] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = () => {
        if (newItemTitle.trim()) {
            onAdd(newItemTitle.trim(), isCompleted);
            setNewItemTitle("");
            setIsCompleted(false);
        }
    };

    return (
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Input
                value={newItemTitle}
                placeholder="Titre de l'item"
                onChange={(e) => setNewItemTitle(e.target.value)}
            />
            <Checkbox
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
            >
                Completed
            </Checkbox>
            <Button type="primary" onClick={handleSubmit}>
                Ajouter
            </Button>
        </Form>
    );
}