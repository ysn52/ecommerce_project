// src/CategoryFilter.jsx
export default function CategoryFilter({
  categories = [],
  selectedCategory,
  onSelect,
}) {
  return (
    <select
      id="category-select"
      className="form-control"
      value={selectedCategory ?? ""}               // seçili değeri kontrol et
      onChange={(e) => onSelect(e.target.value)}  // üst componente ilet
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
