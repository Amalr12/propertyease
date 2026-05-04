import { useState } from "react";

const center = { lat: 10.5276, lng: 76.2144 };
export default function PropertyMap() {
  const [selected, setSelected] = useState<any>(null);

    return (
        <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
            <h1>map section</h1>
        </div>
    );
}