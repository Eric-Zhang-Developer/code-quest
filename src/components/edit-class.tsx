"use client";

import { useState, useEffect } from "react";
import { createClient } from "../lib/supabase/client";
import { Pencil, Check, X } from "lucide-react";

// Map enum values to display names
const CLASS_OPTIONS = [
  { value: 'warrior', label: 'Python Warrior', comingSoon: false },
  { value: 'mage', label: 'Java Mage', comingSoon: true },
  { value: 'rogue', label: 'C++ Rogue', comingSoon: true },
] as const;

interface EditClassProps {
  currentClass: string;
  currentClassEnum: string | null;
  userId: string;
}

export default function EditClass({ currentClass, currentClassEnum, userId }: EditClassProps) {
  const [isEditing, setIsEditing] = useState(false);
  // Default to 'warrior' (Python Warrior) which is available
  const [selectedClassEnum, setSelectedClassEnum] = useState<string>(currentClassEnum || 'warrior');
  const [isSaving, setIsSaving] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    // If current class is coming soon or null, default to warrior (Python Warrior)
    const currentOption = CLASS_OPTIONS.find(opt => opt.value === currentClassEnum);
    if (!currentClassEnum || currentOption?.comingSoon) {
      setSelectedClassEnum('warrior');
    } else {
      setSelectedClassEnum(currentClassEnum);
    }
  }, [currentClassEnum]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Use upsert to insert if profile doesn't exist, or update if it does
      const { data, error } = await supabase
        .from('profiles')
        .upsert({ 
          id: userId,
          class: selectedClassEnum 
        }, {
          onConflict: 'id'
        })
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Class saved successfully:", data);
      setIsEditing(false);
      // Refresh the page to show updated class
      window.location.reload();
    } catch (error) {
      console.error("Error updating class:", error);
      alert(`Failed to update class: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    // Reset to current class or default to warrior if coming soon
    const currentOption = CLASS_OPTIONS.find(opt => opt.value === currentClassEnum);
    if (!currentClassEnum || currentOption?.comingSoon) {
      setSelectedClassEnum('warrior');
    } else {
      setSelectedClassEnum(currentClassEnum);
    }
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-start gap-3 mb-4 relative">
        <div
          className="absolute left-0 top-0 bottom-0 rounded"
          style={{
            backgroundColor: "#be9661",
            width: "4px",
            marginTop: "-2px",
            marginBottom: "-2px",
          }}
        />
        <div className="pl-3 flex-1">
          <span className="text-sm block mb-2" style={{ color: "#A0A0A0" }}>
            Class
          </span>
          <select
            value={selectedClassEnum}
            onChange={(e) => setSelectedClassEnum(e.target.value)}
            className="w-full px-3 py-2 rounded-lg mb-2"
            style={{
              backgroundColor: "#232331",
              color: "#E0E0E0",
              border: "0.5px solid rgba(190, 150, 97, 0.3)",
            }}
          >
            {CLASS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}{option.comingSoon ? ' - Coming Soon' : ''}
              </option>
            ))}
          </select>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-3 py-1 rounded-lg flex items-center gap-1"
              style={{
                backgroundColor: "#be9661",
                color: "#191922",
                border: "none",
              }}
            >
              <Check size={14} />
              <span>{isSaving ? "Saving..." : "Save"}</span>
            </button>
            <button
              onClick={handleCancel}
              disabled={isSaving}
              className="px-3 py-1 rounded-lg flex items-center gap-1"
              style={{
                backgroundColor: "#232331",
                color: "#E0E0E0",
                border: "0.5px solid rgba(190, 150, 97, 0.3)",
              }}
            >
              <X size={14} />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 mb-4 relative">
      <div
        className="absolute left-0 top-0 bottom-0 rounded"
        style={{
          backgroundColor: "#be9661",
          width: "4px",
          marginTop: "-2px",
          marginBottom: "-2px",
        }}
      />
      <div className="pl-3 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm block mb-1" style={{ color: "#A0A0A0" }}>
              Class
            </span>
            <span className="text-base block" style={{ color: "#E0E0E0" }}>
              {currentClass || 'Not set'}
            </span>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 rounded transition-opacity hover:opacity-80"
            style={{ color: "#be9661" }}
            title="Edit class"
          >
            <Pencil size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
