import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";

type EditItemProps = {
    itemTitle: string; // Titre initial de l'item à modifier
    completed: boolean; // Statut initial de "completed"
    onEdit: (newTitle: string, newCompleted: boolean) => void; // Callback pour appliquer les modifications
    onCancel: () => void; // Callback pour annuler l'édition
};

export default function EditItemComponent({
                                              itemTitle,
                                              completed,
                                              onEdit,
                                              onCancel,
                                          }: EditItemProps) {
    const [editedTitle, setEditedTitle] = useState(itemTitle);
    const [isCompleted, setIsCompleted] = useState(completed);

    // Mettez à jour l'état si les props de l'item changent
    useEffect(() => {
        setEditedTitle(itemTitle);
        setIsCompleted(completed);
    }, [itemTitle, completed]);

    const handleSave = () => {
        if (editedTitle.trim()) {
            onEdit(editedTitle.trim(), isCompleted); // Envoie les modifications au parent
        }
    };

    return (
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Input
                value={editedTitle}
                placeholder="Modifier le titre"
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            <Checkbox
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
            >
                Completed
            </Checkbox>
            <div style={{ display: "flex", gap: "10px" }}>
                <Button type="primary" onClick={handleSave}>
                    Enregistrer
                </Button>
                <Button onClick={onCancel}>Annuler</Button>
            </div>
        </Form>
    );
}