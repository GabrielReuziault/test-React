import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";

type CreateOrEditItemProps = {
    itemTitle?: string;
    completed?: boolean;
    onSave: (title: string, completed: boolean) => void;
    onDelete?: () => void;
    onCancel: () => void;
};

export default function CreateOrEditItem({
                                             itemTitle = "",
                                             completed = false,
                                             onSave,
                                             onDelete,
                                             onCancel,
                                         }: CreateOrEditItemProps) {
    const [title, setTitle] = useState(itemTitle);
    const [isCompleted, setIsCompleted] = useState(completed);

    useEffect(() => {
        setTitle(itemTitle);
        setIsCompleted(completed);
    }, [itemTitle, completed]);

    const handleSave = () => {
        if (title.trim()) {
            onSave(title.trim(), isCompleted);
        }
    };

    return (
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Input
                value={title}
                placeholder="Titre de l'item"
                onChange={(e) => setTitle(e.target.value)}
            />
            <Checkbox
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
            >
                Marquer comme terminé
            </Checkbox>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                {onDelete && (
                    <Button type="ghost" danger onClick={onDelete}>
                        Supprimer
                    </Button>
                )}
                <div style={{ display: "flex", gap: "10px" }}>
                    <Button onClick={onCancel}>Annuler</Button>
                    <Button type="primary" onClick={handleSave}>
                        {onDelete ? "Enregistrer" : "Créer"}
                    </Button>
                </div>
            </div>
        </Form>
    );
}