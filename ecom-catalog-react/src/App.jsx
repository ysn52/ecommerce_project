import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './ProductList'
import CategoryFilter from './CategoryFilter'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(r => r.json())
      .then(data => setProducts(Array.isArray(data) ? data : []))

    fetch('http://localhost:8080/api/categories')
      .then(r => r.json())
      .then(data => setCategories(Array.isArray(data) ? data : []))
  }, [])

  const handleSearchChange = (e) => setSearchTerm(e.target.value)
  const handleSortChange = (e) => setSortOrder(e.target.value)
  const handleCategorySelect = (categoryId) =>
    setSelectedCategory(categoryId ? Number(categoryId) : null)

  // Kategori + arama + sıralama
  const filteredProducts = products
    .filter(p =>
      (selectedCategory ? (p.category?.id === selectedCategory) : true) &&
      (p.name?.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => sortOrder === 'asc' ? (a.price - b.price) : (b.price - a.price))

  return (
    <div className="container">
      <h1 className="my-4">Product Catalog</h1>

      <div className="row align-items-center mb-4">
        <div className="col-md-3 col-sm-12 mb-2">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={handleCategorySelect}
          />
        </div>

        <div className="col-md-5 col-sm-12 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="col-md-4 col-sm-12 mb-2">
          <select className="form-control" value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Sort by price: low to high</option>
            <option value="desc">Sort by price: high to low</option>
          </select>
        </div>
      </div>

      <div>
        {filteredProducts.length ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  )
}

export default App
