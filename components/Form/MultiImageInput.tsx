"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { X, Plus, ImagePlus } from "lucide-react";

interface MultiImageInputProps {
    initialImages?: string[];
}

const MultiImageInput = ({ initialImages = [] }: MultiImageInputProps) => {
    const [previews, setPreviews] = useState<string[]>(initialImages);
    const [files, setFiles] = useState<File[]>([]);
    const [existingImages, setExistingImages] = useState<string[]>(initialImages);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFiles = (newFiles: FileList | null) => {
        if (!newFiles) return;
        const fileArray = Array.from(newFiles);
        const total = existingImages.length + files.length + fileArray.length;
        if (total > 5) {
            alert("สูงสุด 5 รูป (รวมของเดิม)");
            return;
        }

        const newPreviews = fileArray.map((f) => URL.createObjectURL(f));
        setFiles((prev) => [...prev, ...fileArray]);
        setPreviews((prev) => [...prev, ...newPreviews]);
    };

    const removeImage = (index: number) => {
        const srcToRemove = previews[index];

        // Check if it's an existing image (URL) or a new file (blob)
        if (existingImages.includes(srcToRemove)) {
            setExistingImages((prev) => prev.filter((img) => img !== srcToRemove));
        } else {
            // It's a new file
            const fileIndex = index - existingImages.length;
            URL.revokeObjectURL(srcToRemove);
            setFiles((prev) => prev.filter((_, i) => i !== fileIndex));
        }

        setPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
                รูปภาพสินค้า (สูงสุด 5 รูป)
            </label>

            {/* Hidden inputs for existing images to preserve them in FormData */}
            {existingImages.map((img, i) => (
                <input key={`existing-${i}`} type="hidden" name="existingImages" value={img} />
            ))}

            {/* Hidden file inputs for FormData */}
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
            />
            {/* Hidden inputs to submit files — re-attach on form submit */}
            {files.map((file, i) => {
                const dt = new DataTransfer();
                dt.items.add(file);
                return (
                    <input
                        key={`file-${i}`}
                        type="file"
                        name="images"
                        className="hidden"
                        ref={(el) => {
                            if (el) {
                                el.files = dt.files;
                            }
                        }}
                    />
                );
            })}

            {/* Grid Preview */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {previews.map((src, index) => (
                    <div
                        key={index}
                        className="relative aspect-square rounded-xl overflow-hidden border-2 border-white/10 group"
                    >
                        <Image
                            src={src}
                            alt={`Preview ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X size={14} />
                        </button>
                        {index === 0 && (
                            <span className="absolute bottom-1 left-1 text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                                หลัก
                            </span>
                        )}
                    </div>
                ))}

                {/* Add button */}
                {previews.length < 5 && (
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        className="aspect-square rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-gray-500 hover:border-white/40 hover:text-gray-300 transition-colors cursor-pointer"
                    >
                        <ImagePlus size={24} />
                        <span className="text-xs mt-1">เพิ่มรูป</span>
                    </button>
                )}
            </div>

            {previews.length === 0 && (
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="w-full mt-2 py-8 rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-gray-500 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-pointer"
                >
                    <Plus size={32} />
                    <span className="text-sm mt-2">คลิกเพื่อเลือกรูปภาพ</span>
                    <span className="text-xs text-gray-600 mt-1">PNG, JPG, WebP (สูงสุด 5MB/รูป)</span>
                </button>
            )}
        </div>
    );
};

export default MultiImageInput;
