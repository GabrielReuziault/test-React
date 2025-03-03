"use client"
import Link from "next/link";
import SettingsFormComponent from "@/components/forms/SettingsFormComponent";

export default function SettingsPage() {
    return (<div className={"mx-auto"}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <h1>Settings</h1>
            <p className={"text-xm"}>Paramètres de l app</p>
            <SettingsFormComponent/>
            <Link href="/">Retour à l accueil</Link>
        </div>
    </div>);
}