import Link from "next/link";
import TodoItem from "@/models/TodoItem";
import TodoItemsComponent from "@/components/forms/TodoItemsComponent";

const defaultTodoItem =[
    new TodoItem("Faire les courses").toSimpleObject(),
    new TodoItem("Acheter du pain", true).toSimpleObject(),
    new TodoItem("Acheter du lait").toSimpleObject()
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Accueil</h1>
          <TodoItemsComponent items={defaultTodoItem}/>
          <Link href="/settings">Paramètres</Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
