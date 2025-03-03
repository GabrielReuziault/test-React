"use client";
import SimpleTodoItem from "@/models/TodoItem";
import { useState } from "react";
import {Button, Checkbox, Modal} from "antd";
import AddItemComponent from "@/components/AddItemComponent";

export default function TodoItemsComponent({ ...props }: { items: SimpleTodoItem[] }) {
    const [items, setItems] = useState(props.items);
    const [showDialog, setShowDialog] = useState(false);

    const handleAddItem = (title: string) => {
        const newItem = new SimpleTodoItem(title);
        setItems([...items, newItem]);
    };

    return (
        <div>
            <Button onClick={() => setShowDialog(true)}>
                Ajouter un item
            </Button>
            <Modal open={showDialog} onCancel={() => setShowDialog(false)}>
                <AddItemComponent onAdd={handleAddItem} />
            </Modal>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Checkbox
                            checked={item.completed}
                            onChange={() => {
                                const newItems = [...items];
                                newItems[index].completed = !newItems[index].completed;
                                setItems(newItems);
                            }}
                        />
                        {item.title} {item.completed ? "(done)" : ""}
                    </li>
                ))}
            </ul>
            <Button onClick={() => setItems([])} style={{ marginTop: "20px" }}>
                Supprimer tous les items
            </Button>
        </div>
    );
}