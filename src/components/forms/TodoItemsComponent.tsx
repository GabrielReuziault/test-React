"use client";
import SimpleTodoItem from "@/models/TodoItem";
import { useState } from "react";
import { Button, Checkbox, Modal } from "antd";
import CreateOrEditItem from "@/components/CreateOrEditItem";

export default function TodoItemsComponent({ ...props }: { items: SimpleTodoItem[] }) {
    const [items, setItems] = useState(props.items);

    const [currentItem, setCurrentItem] = useState<SimpleTodoItem | null>(null); // Pour modification
    const [showDialog, setShowDialog] = useState(false); // Pour le formulaire de création
    const [showEditDialog, setShowEditDialog] = useState(false); // Pour le formulaire d'édition

    const handleAddItem = (title: string, completed: boolean) => {
        const newItem = new SimpleTodoItem(title, completed);
        setItems([...items, newItem]);
        setShowDialog(false); // Ferme le modal après création
    };

    const handleEditItem = (newTitle: string, newCompleted: boolean) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item === currentItem ? new SimpleTodoItem(newTitle, newCompleted) : item
            )
        );
        setCurrentItem(null); // Quitte le mode édition
        setShowEditDialog(false);
    };

    const handleDeleteItem = () => {
        setItems((prevItems) => prevItems.filter((item) => item !== currentItem));
        setCurrentItem(null); // Quitte le mode édition
        setShowEditDialog(false);
    };

    return (
        <div>
            {/* Bouton pour ajouter un item */}
            <Button onClick={() => setShowDialog(true)} style={{ marginBottom: "10px" }}>
                Ajouter un item
            </Button>
            <Modal
                open={showDialog}
                onCancel={() => setShowDialog(false)}
                footer={null}
            >
                <CreateOrEditItem
                    onSave={handleAddItem}
                    onCancel={() => setShowDialog(false)}
                />
            </Modal>

            {/* Liste des items */}
            <ul>
                {items.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                            checked={item.completed}
                            onChange={() => {
                                const newItems = [...items];
                                newItems[index].completed = !newItems[index].completed;
                                setItems(newItems);
                            }}
                        />
                        <span style={{ flex: 1, marginLeft: "10px" }}>
                            {item.title} {item.completed ? "(done)" : ""}
                        </span>
                        <Button
                            type="link"
                            onClick={() => {
                                setCurrentItem(item);
                                setShowEditDialog(true);
                            }}
                        >
                            Modifier
                        </Button>
                    </li>
                ))}
            </ul>

            {/* Modal pour éditer ou supprimer un item */}
            {currentItem && (
                <Modal
                    open={showEditDialog}
                    onCancel={() => {
                        setCurrentItem(null);
                        setShowEditDialog(false);
                    }}
                    footer={null}
                >
                    <CreateOrEditItem
                        itemTitle={currentItem.title}
                        completed={currentItem.completed}
                        onSave={handleEditItem}
                        onDelete={handleDeleteItem}
                        onCancel={() => {
                            setCurrentItem(null);
                            setShowEditDialog(false);
                        }}
                    />
                </Modal>
            )}

            {/* Bouton pour supprimer tous les items */}
            <Button
                onClick={() => setItems([])}
                style={{ marginTop: "20px" }}
                danger
            >
                Supprimer tous les items
            </Button>
        </div>
    );
}