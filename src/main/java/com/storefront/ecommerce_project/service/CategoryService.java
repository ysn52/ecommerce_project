package com.storefront.ecommerce_project.service;


import com.storefront.ecommerce_project.model.Category;
import com.storefront.ecommerce_project.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) { 
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {

        return categoryRepository.findAll();
    }
}
