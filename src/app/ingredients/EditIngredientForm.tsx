import React, { useState } from "react";

interface Ingredient {
  id: string;
  name: string;
  category: string;
  imageURL: string;
}

interface EditIngredientFormProps {
  categories: string[];
  ingredient: Ingredient;
  onEditIngredient: (ingredient: Ingredient) => void;
  onCancel: () => void;
}

const EditIngredientForm: React.FC<EditIngredientFormProps> = ({
  categories,
  ingredient,
  onEditIngredient,
  onCancel,
}) => {
  const [updatedIngredient, setUpdatedIngredient] = useState<Ingredient>({
    ...ingredient,
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedIngredient((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/ingredients/${updatedIngredient.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: updatedIngredient.name,
            category: updatedIngredient.category,
            imageURL: updatedIngredient.imageURL,
          }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Backend error response:", errorResponse);
        throw new Error(
          errorResponse.message || "Failed to update ingredient."
        );
      }

      const editedIngredient: Ingredient = await response.json();
      onEditIngredient(editedIngredient);
    } catch (error) {
      console.error("Error editing ingredient:", error);
      alert(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Edit Ingredient</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={updatedIngredient.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={updatedIngredient.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="text"
          name="imageURL"
          value={updatedIngredient.imageURL || ""}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="/images/placeholder_image.png"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 mr-2"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default EditIngredientForm;
