import React, { useState } from "react";
import QRCode from "qrcode";

const GeneradorQR = () => {
    const [nombreTrabajador, setNombreTrabajador] = useState("");
    const [fruta, setFruta] = useState("");
    const [calidadFruta, setCalidadFruta] = useState("");
    const [jornal, setJornal] = useState("");
    const [qrUrl, setQrUrl] = useState("");

    const generarQR = async () => {
        const data = {
            nombreTrabajador,
            fruta,
            calidadFruta,
            jornal,
        };

        try {
            const jsonString = JSON.stringify(data);
            const url = await QRCode.toDataURL(jsonString);
            setQrUrl(url);
        } catch (err) {
            console.error("Error al generar el QR", err);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Generador de Código QR</h2>

            <input
                type="text"
                placeholder="Nombre del trabajador"
                value={nombreTrabajador}
                onChange={(e) => setNombreTrabajador(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                placeholder="Fruta"
                value={fruta}
                onChange={(e) => setFruta(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                placeholder="Calidad de la fruta"
                value={calidadFruta}
                onChange={(e) => setCalidadFruta(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                placeholder="Jornal"
                value={jornal}
                onChange={(e) => setJornal(e.target.value)}
                className="border p-2 mb-4 w-full"
            />

            <button
                onClick={generarQR}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Generar QR
            </button>

            {qrUrl && (
                <div className="mt-4">
                    <img src={qrUrl} alt="Código QR generado" />
                </div>
            )}
        </div>
    );
};

export default GeneradorQR;