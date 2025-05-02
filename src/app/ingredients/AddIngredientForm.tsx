import React, { useState } from "react";

interface NewIngredient {
  name: string;
  category: string;
}

interface Ingredient extends NewIngredient {
  id: string;
}

interface AddIngredientFormProps {
  categories: string[];
  onAddIngredient: (ingredient: Ingredient) => void;
  onCancel: () => void;
}

const AddIngredientForm: React.FC<AddIngredientFormProps> = ({
  categories,
  onAddIngredient,
  onCancel,
}) => {
  const [ingredient, setIngredient] = useState<NewIngredient>({
    name: "",
    category: categories[0] || "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setIngredient((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!ingredient.name.trim() || !ingredient.category.trim()) {
      alert("Both name and category are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/ingredients/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ingredient),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Backend error response:", errorResponse);
        throw new Error(errorResponse.message || "Failed to add ingredient.");
      }

      const addedIngredient: Ingredient = await response.json();
      console.log("Added ingredient:", addedIngredient);
      onAddIngredient(addedIngredient);
    } catch (error) {
      console.error("Error adding ingredient:", error);
      alert(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add New Ingredient</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={ingredient.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={ingredient.category}
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
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddIngredientForm;