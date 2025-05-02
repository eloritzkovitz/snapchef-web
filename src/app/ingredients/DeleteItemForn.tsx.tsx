import React, { useState } from "react";

interface DeleteItemFormProps {
  itemId: string;
  itemName: string; 
  onDeleteSuccess: () => void; 
  onCancel: () => void; 
}

const DeleteItemForm: React.FC<DeleteItemFormProps> = ({
  itemId,
  itemName,
  onDeleteSuccess,
  onCancel,
}) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Handle ingredient deletion
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/ingredients/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the item.");
      }

      // Notify the parent component of successful deletion
      onDeleteSuccess();
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete the item. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <p className="mb-4">
          Are you sure you want to delete <strong>{itemName}</strong>?
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemForm;