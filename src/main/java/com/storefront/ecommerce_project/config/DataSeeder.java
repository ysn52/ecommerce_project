package com.storefront.ecommerce_project.config;


import com.storefront.ecommerce_project.model.Category;
import com.storefront.ecommerce_project.model.Product;
import com.storefront.ecommerce_project.repository.CategoryRepository;
import com.storefront.ecommerce_project.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        productRepository.deleteAll();
        categoryRepository.deleteAll();

        //create categories

        Category elektronics = new Category();
        elektronics.setName("Elektronics");

        Category  clothing = new Category();
        clothing.setName("Clothing");

        Category home = new Category();
        home.setName("Home and kitchen");

        categoryRepository.saveAll(Arrays.asList(elektronics, clothing, home));

        Product phone = new  Product();
        phone.setName("SmartPhone");
        phone.setDescription("amazing features modelss");
        phone.setImageUrl("https://placehold.co/600x400");
        phone.setPrice(699.99);
        phone.setCategory(elektronics);

        Product laptop = new  Product();
        laptop.setName("laptop");
        laptop.setDescription("amazing features laptop modelss");
        laptop.setImageUrl("https://placehold.co/600x400");
        laptop.setPrice(1000.99);
        laptop .setCategory(elektronics);

        Product jacket = new  Product();
        jacket.setName("good jacket");
        jacket.setDescription("amazing mood jacket");
        jacket.setImageUrl("https://placehold.co/600x400");
        jacket.setPrice(200.1);
        jacket.setCategory(clothing);

        Product blender = new  Product();
        blender.setName("blender");
        blender.setDescription("high speed blender");
        blender.setImageUrl("https://placehold.co/600x400");
        blender.setPrice(199.99);
        blender.setCategory(home);

        productRepository.saveAll(Arrays.asList(phone,laptop,jacket,blender));

    }
}
