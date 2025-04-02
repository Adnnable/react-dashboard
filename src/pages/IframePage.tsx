import { useEffect, useState, useRef } from "react";
import * as BABYLON from "babylonjs";
import { useParams } from "react-router-dom";
import { useRunDetails } from "../hooks/useRunDetails";
import "../styles/global.css"

export default function IframePage() {
    const { id } = useParams();
    const [textColor, setTextColor] = useState("white");
    const sceneRef = useRef<BABYLON.Scene | null>(null);
    const dynamicTextureRef = useRef<BABYLON.DynamicTexture | null>(null);
    const { run } = useRunDetails();

    useEffect(() => {
        const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        sceneRef.current = scene;

        // Create camera
        const camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        // Create light
        new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

        // Create a plane for the text
        const plane = BABYLON.MeshBuilder.CreatePlane("textPlane", { size: 5 }, scene);
        plane.position = new BABYLON.Vector3(0, 0, 0);

        // Create a dynamic texture for the text
        const dynamicTexture = new BABYLON.DynamicTexture("dynamicTexture", { width: 512, height: 256 }, scene, true);
        const textMaterial = new BABYLON.StandardMaterial("textMaterial", scene);
        textMaterial.diffuseTexture = dynamicTexture;
        plane.material = textMaterial;
        dynamicTextureRef.current = dynamicTexture;

        // Initial text render
        updateText(run?.name || "Run", textColor);

        engine.runRenderLoop(() => scene.render());

        return () => {
            engine.dispose();
        };
    }, [id, run?.name]);

    // Function to update text color dynamically
    const updateText = (text: string, color: string) => {
        if (!dynamicTextureRef.current) return;

        // Typecast to CanvasRenderingContext2D
        const ctx = dynamicTextureRef.current.getContext() as CanvasRenderingContext2D;

        ctx.clearRect(0, 0, 512, 256); // Clear previous text
        ctx.font = "bold 60px Arial";
        ctx.fillStyle = color;
        ctx.textAlign = "center";  // ✅ Fix applied here
        ctx.fillText(text, 256, 140);

        dynamicTextureRef.current.update(); // Force update
    };


    // Use useEffect to update text when color changes
    useEffect(() => {
        updateText(run?.name || "Run", textColor);
    }, [textColor, id, run?.name]);

    return (
        <div>
            <canvas id="renderCanvas" className="w-full h-full"></canvas>
            <div className="flex gap-2 mt-4">
                <button onClick={() => setTextColor("red")} className="p-2 bg-red-500 text-white">Red</button>
                <button onClick={() => setTextColor("green")} className="p-2 bg-green-500 text-white">Green</button>
                <button onClick={() => setTextColor("yellow")} className="p-2 bg-yellow-500 text-black">Yellow</button>
            </div>
        </div>
    );
}

