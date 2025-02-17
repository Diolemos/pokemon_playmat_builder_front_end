export default function Input(handleImageUpload, overlay, handleGenerate, handleSelectOverlay){





    return (
        <div className="flex flex-col items-center">
          {/* Custom File Input */}
          <div className="flex flex-col my-4">
            <label className="mb-2 text-lg font-semibold">Upload Your Image</label>
            
            <label 
              htmlFor="file-upload" 
              className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
    
          {/* Overlay Selector */}
          <select 
            value={overlay} 
            onChange={(e) => handleSelectOverlay(e.target.value)} 
            className="border border-gray-300 rounded-md p-2 my-2"
          >
            <option value="black">Black Overlay</option>
            <option value="white">White Overlay</option>
          </select>
    
          {/* Generate Button */}
          <button 
            className="cursor-pointer bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
      );
}